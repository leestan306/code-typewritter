import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import languages from "@/lib/languages";
import { useEffect, useRef, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";

function CodeFile() {
  const [code, setCode] = useState(
    "Click icon to change details \nand click filename to animate"
  );
  const [language, setLanguage] = useState(languages[0].title);
  const [fileName, setFileName] = useState("");
  const [duration, setDuration] = useState(5000);

  // File div height and width
  const [height, setHeight] = useState(500);
  const [width, setWidth] = useState(500);
  const syntaxHighlighterRef = useRef<any>(null);
  const fullLang = (title: string = language) => {
    const lang = languages.find((lang) => lang.title === title);
    return lang;
  };
  const [temporaryCode, setTemporaryCode] = useState(""); // State for typewriting effect
  const [isAnimating, setIsAnimating] = useState(false); // Track if animation is active
  const Icon = fullLang()?.icon;

  // Scroll to bottom effect
  useEffect(() => {
    if (syntaxHighlighterRef.current) {
      const element = syntaxHighlighterRef.current;
      // Scroll to bottom of the element
      element.scrollTop = element.scrollHeight;
    }
  }, [temporaryCode, isAnimating]);

  const startTypewriterEffect = () => {
    if (!code || isAnimating) return;

    setIsAnimating(true);
    setTemporaryCode(""); // Start with an empty string

    let currentIndex = 0;
    const typingSpeed = duration / code.length; // Dynamically calculate typing speed

    const typeNextCharacter = () => {
      if (currentIndex <= code.length) {
        // Change < to <=
        setTemporaryCode(code.slice(0, currentIndex + 1)); // Use slice to add characters
        currentIndex++;

        // Schedule next character
        if (currentIndex < code.length) {
          setTimeout(typeNextCharacter, typingSpeed);
        } else {
          // Animation complete
          setIsAnimating(false);
        }
      }
    };

    // Start the typing effect
    typeNextCharacter();
  };
  const detailsDialogButtonRef = useRef<HTMLButtonElement>(null);
  const animateButtonref = useRef<HTMLButtonElement>(null);

  return (
    <div className="">
      <div className="py-2  justify-between w-fit mx-auto gap-2 hidden">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" ref={detailsDialogButtonRef}>
              Code Details
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] max-h-[80dvh] overflow-auto">
            <DialogHeader>
              <DialogTitle>File Details</DialogTitle>
              <DialogDescription>File details</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className=" items-center gap-4">
                <Label
                  htmlFor="name"
                  className="text-right text-xs font-light font-mono"
                >
                  File Name
                </Label>
                <Input
                  id="name"
                  value={fileName}
                  className="col-span-3"
                  onChange={(e) => setFileName(e.target.value)}
                />
              </div>
              <div className=" items-center gap-4">
                <Label
                  htmlFor="username"
                  className="text-right text-xs font-light font-mono"
                >
                  Code
                </Label>
                <Textarea
                  id="username"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="col-span-3 max-h-64 max-w-96"
                />
              </div>
              <div className="">
                <Label
                  htmlFor="select"
                  className="text-right text-xs font-light font-mono"
                >
                  Language
                </Label>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.title} value={lang.title}>
                        {lang.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="items-center gap-4">
                <Label
                  htmlFor="height"
                  className="text-right text-xs font-light font-mono"
                >
                  Height
                </Label>
                <Input
                  id="height"
                  value={height}
                  className="col-span-3"
                  type="number"
                  onChange={(e) => setHeight(Number(e.target.value))}
                />
              </div>
              <div className="items-center gap-4">
                <Label
                  htmlFor="width"
                  className="text-right text-xs font-light font-mono"
                >
                  Width
                </Label>
                <Input
                  id="width"
                  value={width}
                  className="col-span-3"
                  type="number"
                  onChange={(e) => setWidth(Number(e.target.value))}
                />
              </div>
              <div className=" items-center gap-4 hidden">
                <Label
                  htmlFor="duration"
                  className="text-right text-xs font-light font-mono"
                >
                  Animation Duration
                </Label>
                <Input
                  id="duration"
                  value={duration}
                  className="col-span-3"
                  type="number"
                  onChange={(e) => setDuration(Number(e.target.value))}
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                type="submit"
                onClick={() => {
                  document.dispatchEvent(
                    new KeyboardEvent("keydown", { key: "Escape" })
                  );
                }}
              >
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Button
          onClick={startTypewriterEffect}
          disabled={isAnimating}
          ref={animateButtonref}
        >
          Animate
        </Button>
      </div>
      <div>
        <div
          id="code-file"
          className={cn(
            "mx-auto min-h-[200px] bg-slate-800 my-10 text-slate-300 overflow-hidden"
          )}
          style={{
            maxWidth: `${width}px`,
            height: `${height}px`,
          }}
        >
          <div className="flex border-b-[1px] p-1 w-full border-slate-700 items-center gap-2 cursor-pointer">
            <div
              onClick={() => {
                detailsDialogButtonRef.current?.click();
              }}
            >
              {Icon && (
                // @ts-ignore
                <Icon className="text-blue-500" />
              )}
            </div>
            <div
              onClick={() => {
                animateButtonref.current?.click();
              }}
            >
              {fileName}
            </div>
          </div>
          <div>
            <SyntaxHighlighter
              ref={syntaxHighlighterRef}
              language={language.toLowerCase()}
              style={docco}
              customStyle={{
                overflow: "auto",
                fontSize: "14px",
                padding: "10px",
                height: `${height - 50}px`, // Subtract header height
              }}
            >
              {isAnimating ? temporaryCode : code}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeFile;
