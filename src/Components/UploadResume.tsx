import { CircleCheck, FileUp, Loader2, X } from "lucide-react"
import { useEffect, useRef, useState, type ChangeEvent } from "react"
import { createPortal } from "react-dom"
import { toast } from "sonner"
import { loadingMessages, portfolioFacts } from "../utils/processing-resume"
import { axiosInstance } from "../utils/axios-instance"

interface UploadResumeProps {
  open: boolean,
  onOpenChange: (open: boolean) => void,
  selectedTheme: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleCreatePortfolio: (customBody: any) => void
}

export const UploadResume = ({ open, onOpenChange, selectedTheme, handleCreatePortfolio }: UploadResumeProps) => {
  const [uploadingResume, setUploadingResume] = useState<boolean>(false);
  const [resumeUploaded, setResumeUploaded] = useState<boolean>(false);
  const [base64Data, setBase64Data] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [progressValue, setProgressValue] = useState<number>(0);
  const [currentMessage, setCurrentMessage] = useState<number>(0);
  const [currentFact, setCurrentFact] = useState<number>(0);
  const [customBodyResume, setCustomBodyResume] = useState("");
  const [showPreview, setShowPreview] = useState<boolean>(false);

  const progressRef = useRef(progressValue);

  useEffect(() => {
    progressRef.current = progressValue;
  }, [progressValue]);

  const handleResumeUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    if (file?.type === "application/pdf") {
      await handleFile(file);
    }
    else {
      toast.error("Please upload a PDF file");
    }
  }

  const handleFile = async (file: File) => {
    if (!file) return;

    setUploadingResume(true);
    try {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTimeout(() => {
          const base64String = reader.result as string;
          setBase64Data(base64String);
          setResumeUploaded(true);
          setUploadingResume(false);
        }, 2000);
      }
      reader.readAsDataURL(file);
    } catch {
      toast.error("Error processing PDF");
      setUploadingResume(false);
    }
  }

  const extractDetails = async () => {
    if (!base64Data) return;

    setResumeUploaded(false);
    setIsLoading(true);

    const progressInterval = setInterval(() => {
      setProgressValue((prev) => {
        const increment = Math.floor(prev < 70 ? Math.random() * 2 + 1 : Math.random() * 3 + 1);
        return prev + increment < 95 ? prev + increment : 95;
      })
    }, 1000)

    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => {
        const newIndex = Math.min(Math.floor((progressRef.current / 100) * loadingMessages.length), loadingMessages.length - 1);
        return newIndex !== prev ? newIndex : prev;
      })
    }, 3000)

    const factInterval = setInterval(() => {
      setCurrentFact(prev => (prev + 1) % portfolioFacts.length);
    }, 6000)

    let response;
    try {
      response = await axiosInstance.post("/api/extract-report-gemini", { base64: base64Data, selectedTheme });
      console.log(response);

      if (response.status === 200) {
        const { data } = response;
        console.log("customBodyData: ", data);
        setCustomBodyResume(data);

        clearInterval(progressInterval);
        clearInterval(factInterval);
        clearInterval(messageInterval);

        const completionAnimation = () => {
          setProgressValue((prev) => {
            const newValue = prev + 2;

            if (newValue >= 100) {
              clearInterval(completionInterval);

              setTimeout(() => {
                toast.success("Portfolio created successfully", { id: "portfolio-success" });
                setIsLoading(false);
                setShowPreview(true);
              }, 800)

              return 100;
            }

            return newValue;
          })
        }

        const completionInterval = setInterval(completionAnimation, 50);
      }
      else {
        clearInterval(progressInterval);
        clearInterval(factInterval);
        clearInterval(messageInterval);
        toast.error("Unable to create portfolio");
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      clearInterval(progressInterval);
      clearInterval(factInterval);
      clearInterval(messageInterval);
      toast.error("Unable to create portfolio");
      setIsLoading(false);
    } finally {
      if (!response || response.status !== 200) {
        setIsLoading(false);
      }
    }
  }

  const handleBack = () => {
    setUploadingResume(false);
    setResumeUploaded(false);
    setBase64Data("");
    setIsLoading(false);
    setProgressValue(0);
    setShowPreview(false);
    onOpenChange(false);
  }

  return createPortal(
    <>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-bgBlack/30 backdrop-blur-xs">
          <div className="w-[45%] h-1/2 bg-cardGray rounded-xl relative border-[1px] border-neutral-700/50 shadow-xl">
            <button className="absolute right-0 p-4 cursor-pointer" onClick={handleBack}><X className="w-5 h-5 text-secondary hover:text-white" /></button>

            <div className="h-full flex flex-col items-center justify-center gap-6">
              <div className="space-y-1">
                <h3 className="text-3xl tracking-tight font-bold text-center">The <span className="gradient-text">Magic</span> of Resume Import</h3>
                <p className="text-lg font-light text-secondary text-center">Transform your existing resume into a stunning portfolio website with just one click</p>
              </div>

              <div className="flex items-center justify-center bg-bgSecondary w-[60%] rounded-lg h-[282px]">
                {!uploadingResume && !resumeUploaded && !isLoading && !showPreview && (
                  <label htmlFor="resume" className="w-[90%] flex flex-col gap-2 items-center justify-center cursor-pointer hover:bg-primary/5 hover:border-primary mx-6 p-16 border border-dashed border-secondary rounded-xl">
                    <input className="hidden" name="resume" id="resume" type="file" onChange={handleResumeUpload} value="" />
                    <FileUp className="w-10 h-10 text-primary" strokeWidth={1.5} />
                    <p className="text-base font-semibold">Upload your resume</p>
                    <p className="text-secondary">Drop your PDF here or click to browse</p>
                  </label>
                )}

                {uploadingResume && (
                  <div className="flex flex-col gap-1 items-center justify-center">
                    <Loader2 className="w-12 h-12 text-primary animate-spin mb-2" strokeWidth={1.5} />
                    <h3 className="text-base font-semibold">Uploading Resume...</h3>
                    <p className="text-secondary">Your resume is making its way up!</p>
                  </div>
                )}

                {resumeUploaded && (
                  <div className="flex flex-col gap-1 items-center justify-center">
                    <p className="mb-2 bg-primary/30 p-3.5 w-fit rounded-full"><CircleCheck className="w-9 h-9 text-primary" strokeWidth={1.5} /></p>
                    <h3 className="text-base font-semibold">Resume uploaded successfully!</h3>
                    <p className="text-secondary text-sm">Click the button below to create your portfolio</p>
                    <button className="primary-btn py-2.5 px-5 rounded-lg mt-4" onClick={extractDetails}>Process Resume</button>
                  </div>
                )}

                {isLoading && (
                  <div className="flex flex-col gap-1 items-center justify-center px-10">
                    <p className="bg-primary/20 rounded-4xl h-6 w-full mb-4">
                      <span className={`transition-all duration-200 ease-in-out block rounded-4xl h-full bg-gradient-to-l from-primary to-primary/70`} style={{ width: `${progressValue}%` }} />
                    </p>
                    <h3 className="text-base font-semibold text-primary">{loadingMessages[currentMessage]}</h3>
                    <p className="text-secondary text-sm"><span className="text-primary">{progressValue}%</span> complete</p>
                    <div className="bg-primary/4 flex flex-col gap-2 items-center justify-center p-4 border-[1px] border-primary/20 rounded-xl mt-4">
                      <h6 className="font-semibold text-primary text-sm">Did you know?</h6>
                      <p className="text-center px-6 text-sm">{portfolioFacts[currentFact]}</p>
                    </div>
                  </div>
                )}

                {showPreview && (
                  <div className="flex flex-col gap-1 items-center justify-center">
                    <p className="mb-2 bg-primary/30 p-3.5 w-fit rounded-full"><CircleCheck className="w-9 h-9 text-primary" strokeWidth={1.5} /></p>
                    <h3 className="text-base font-semibold">Portfolio Ready!</h3>
                    <p className="text-secondary text-sm">We've successfully extracted your details and built your site.</p>
                    <button className="primary-btn py-2.5 px-5 rounded-lg mt-4" onClick={() => handleCreatePortfolio(customBodyResume)}>View My Portfolio</button>
                  </div>
                )}

              </div>


            </div>
          </div>
        </div>
      )}
    </>,
    document.body
  )
}
