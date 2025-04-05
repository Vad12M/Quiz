import { useEffect, useState } from "react";
import { IQuestion } from "@/interfaces/IQuestion";
import {
  fetchQuizQuestions,
  fetchQuizThankYouConfig,
  saveQuizQuestions,
  saveQuizThankYouConfig
} from "@/services/fakeApi";
import Button from "@/ui/Button";
import CMSInputField from "@/components/cms/CMSBlock";
import { defaultThankYouConfig } from "@/constants/defaultThankYouConfig";
import { IThankYouConfig } from "@/interfaces/IThankYouConfig";

const LANGUAGES = ["en-US", "fr-FR", "de-DE", "es-ES"];

export default function Settings() {
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [thankYouConfig, setThankYouConfig] = useState<IThankYouConfig>(defaultThankYouConfig);
  const [activeLang, setActiveLang] = useState("en-US");

  useEffect(() => {
    fetchQuizQuestions().then((res) => {
      if (res) {
        setQuestions(res);
      }
    })

    fetchQuizThankYouConfig().then((res) => {
      if (res) {
        setThankYouConfig(res);
      }
    })
  }, []);

  const updateField = (
    qIndex: number,
    field: string,
    lang: string,
    value: string,
    optionIndex?: number
  ) => {
    const updated: any[] = [...questions];
    if (field === "label" && optionIndex !== undefined) {
      updated[qIndex].options[optionIndex].label[lang] = value;
    } else {
      if (!updated[qIndex][field]) {
        updated[qIndex][field] = {};
      }
      updated[qIndex][field]![lang] = value;
    }
    setQuestions(updated);
  };

  const updateThankYouConfig = (
    field: string,
    lang: string,
    value: string
  ) => {
    const updatedConfig: any = { ...thankYouConfig };
    if (!updatedConfig[field]) {
      updatedConfig[field] = {};
    }
    updatedConfig[field]![lang] = value;
    setThankYouConfig(updatedConfig);
  };

  const saveToStorage = () => {
    saveQuizQuestions(questions);
    saveQuizThankYouConfig(thankYouConfig);
    alert("Saved!");
  };

  return (
    <div className="p-6 max-w-5xl mx-auto h-full min-h-screen">

      <div className="flex gap-2 mb-6">
        {LANGUAGES.map((lang) => (
          <button
            key={lang}
            onClick={() => setActiveLang(lang)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeLang === lang
                ? "bg-primary text-white"
                : "bg-white text-black"
            }`}
          >
            {lang}
          </button>
        ))}
      </div>

      <div className="space-y-8">
        {questions.map((q, qIndex) => (
          <div key={q.questionId} className="bg-secondary shadow-md rounded-2xl p-6">
            <h2 className="font-bold mb-2">#{q.order} - {q.questionId}</h2>
            <CMSInputField
              title={`Title (${activeLang})`}
              value={q.title?.[activeLang] || ""}
              placeholder="Enter question title"
              onChange={(e) =>
                updateField(qIndex, "title", activeLang, e.target.value)
              }
            />

            {q.description && (
              <CMSInputField
                title={`Description (${activeLang})`}
                value={q.description?.[activeLang] || ""}
                placeholder="Enter question description"
                onChange={(e) =>
                  updateField(qIndex, "description", activeLang, e.target.value)
                }
              />
            )}

            {q.subDescription && (
              <CMSInputField
                title={`Sub Description (${activeLang})`}
                value={q.subDescription?.[activeLang] || ""}
                placeholder="Enter sub-description"
                onChange={(e) =>
                  updateField(qIndex, "subDescription", activeLang, e.target.value)
                }
              />
            )}

            {q.options.length > 0 && (
              <div className="space-y-2">
                <label className="font-semibold block">Options ({activeLang})</label>
                {q.options.map((opt, optIndex) => (
                  <CMSInputField
                    key={opt.value}
                    value={opt.label[activeLang] || ""}
                    placeholder="Enter option label"
                    onChange={(e) =>
                      updateField(qIndex, "label", activeLang, e.target.value, optIndex)
                    }
                  />
                ))}
              </div>
            )}
          </div>
        ))}

        <div className="bg-secondary shadow-md rounded-2xl p-6">
          <h2 className="font-bold mb-2">Thank You Config</h2>

          <CMSInputField
            title={`Thank You Title (${activeLang})`}
            value={thankYouConfig.title[activeLang] || ""}
            placeholder="Enter thank you title"
            onChange={(e) =>
              updateThankYouConfig("title", activeLang, e.target.value)
            }
          />

          <CMSInputField
            title={`Thank You Description (${activeLang})`}
            value={thankYouConfig.description[activeLang] || ""}
            placeholder="Enter thank you description"
            onChange={(e) =>
              updateThankYouConfig("description", activeLang, e.target.value)
            }
          />

          <CMSInputField
            title={`Download Label (${activeLang})`}
            value={thankYouConfig.downloadLabel[activeLang] || ""}
            placeholder="Enter download label"
            onChange={(e) =>
              updateThankYouConfig("downloadLabel", activeLang, e.target.value)
            }
          />

          <CMSInputField
            title={`Retake Label (${activeLang})`}
            value={thankYouConfig.retakeLabel[activeLang] || ""}
            placeholder="Enter retake label"
            onChange={(e) =>
              updateThankYouConfig("retakeLabel", activeLang, e.target.value)
            }
          />
        </div>
      </div>


      <Button onClick={saveToStorage} label={'Save'} className="mt-8"/>
    </div>
  );
}
