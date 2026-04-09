import React, { useRef } from "react";
import { getProposalMetaAndAccount } from "./monday";
import { useLocation } from "react-router-dom";
import domtoimage from "dom-to-image";
import jsPDF from "jspdf";
import { IoIosClose } from "react-icons/io";
import { uploadAndLinkToMonday } from "./dropbox"; // Import your dropbox function

// Header Component
const Header = ({ mode, setMode }) => {
  return (
    <div
      className="text-white px-4 py-6 md:px-8 md:py-8 relative"
      style={{ background: "linear-gradient(90deg, #062D57 0%, #031327 100%)" }}
    >
      <div
        dir="ltr"
        className="flex items-center space-x-4 md:space-x-8 px-4 md:absolute md:px-0 md:left-[20%]"
      >
        <button
          className={`cursor-pointer text-xs flex flex-col gap-1 items-center focus:outline-none ${
            mode === "light" ? "underline underline-offset-4" : ""
          }`}
          onClick={() => setMode("light")}
        >
          <img className="w-5 h-5" src="/Huge-icon.png" alt="" />
          Light Mode
        </button>
        <button
          className={`cursor-pointer text-xs text-[#047AD5] flex flex-col gap-1 items-center focus:outline-none ${
            mode === "dark" ? "underline underline-offset-4" : ""
          }`}
          onClick={() => setMode("dark")}
        >
          <img className="w-4 h-5" src="/Subtract.png" alt="" />
          Dark Mode
        </button>
      </div>
      <div
        className={`absolute left-5 -bottom-[21%] md:left-[20%] md:-bottom-[28%] ${
          mode === "dark" ? "bg-[#042140]" : "bg-white"
        } w-24 h-24 md:w-40 md:h-40 rounded-full flex justify-center items-center`}
      >
        <img
          className="md:w-30 md:h-30 w-16 h-16 md:me-3 me-2"
          src={mode === "dark" ? "/Logo.png" : "/Logo light.png"}
          alt=""
        />
      </div>
      <div className="max-w-2xl mx-auto">
        <h1 className="md:text-2xl mb-4">הדור הבא של פתרונות</h1>
        <h2 className="text-3xl md:text-5xl">התקשורת</h2>
        <h3 className="text-3xl md:text-5xl">והמולטימדיה לעסקים</h3>
        <p className="md:text-2xl">תחת קורת גג אחת</p>
      </div>
    </div>
  );
};

// Company Info Component
const CompanyInfo = ({ mode }) => {
  return (
    <div dir="rtl" className="mt-16 mb-8 mx-auto">
      <h2
        className={`text-2xl md:text-4xl font-extrabold ${
          mode === "dark" ? "text-white" : "text-[#042140]"
        } mb-8`}
      >
        מודוס מערכות
      </h2>

      {/* Services Row - Desktop */}

      {/* Services Row - Desktop */}
      <div className="mb-6 hidden md:block">
        <div
          className={`flex ${mode === "dark" ? "text-white" : "text-gray-600"} text-xl`}
          style={{ justifyContent: "space-between" }}
        >
          <div className="ml-auto">ניהול רשתות</div>
          <div className="ml-auto mr-auto border-r border-gray-400"></div>
          <div className="mr-auto ml-auto">מרכזיה בענן</div>
          <div className="border-r ml-auto mr-auto border-gray-400"></div>
          <div className="mr-auto ml-auto">תשתיות תקשורת קווית ואלחוטית</div>
          <div className="border-r ml-auto mr-auto border-gray-400"></div>
          <div className="mr-auto ml-auto">מערכות מתח נמוך</div>
          <div className="border-r ml-auto mr-auto border-gray-400"></div>

          <div className="mr-auto">פתרונות אודיו-וידאו</div>
        </div>
      </div>

      {/* Services Row - Mobile (2 rows) */}
      <div className="mb-6 md:hidden">
        <div
          className={`${
            mode === "dark" ? "text-white" : "text-gray-600"
          } text-xs`}
        >
          <div className="flex justify-between items-center mb-2">
            <div className="flex-1">ניהול רשתות</div>
            <div className="flex-1 border-r border-gray-500 px-2">
              מרכזיה בענן
            </div>
            <div className="text-left text-[0.64rem] md:text-xs px-2 flex-2 border-r border-gray-500">
              תשתיות תקשורת קווית ואלחוטית
            </div>
          </div>
          <div className="flex items-center">
            <div className="pe-2">מערכות מתח נמוך</div>
            <div className="border-r border-gray-500 px-4">
              פתרונות אודיו-וידאו
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Row - Desktop */}
      <div className="mt-8 hidden md:block">
        <div
          className={`flex justify-between items-center ${
            mode === "dark" ? "text-white" : "text-gray-600"
          } text-xl`}
        >
          <div className="flex items-center gap-2 flex-1">
            <img src="/Home.png" alt="" />
            <span>ח .פ: 516793320</span>
          </div>
          <div className="flex items-center gap-2 flex-1 justify-center px-4">
            <img src="/@.png" alt="" />
            <span>billing@modusmedi a.io</span>
          </div>
          <div className="flex items-center gap-2 flex-1 justify-center px-4">
            <img src="/call.png" alt="" />
            <span>03-9521528</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/Pin.png" alt="" />
            <span>דרך מנחם בגין 150, מגדל WE, תל אביב–יפו</span>
          </div>
        </div>
      </div>

      {/* Contact Info Row - Mobile (2 rows) */}
      <div className="mt-8 md:hidden">
        <div
          className={`${
            mode === "dark" ? "text-white" : "text-gray-600"
          } text-xs`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 justify-center">
              <img className="w-4 h-4" src="/Home.png" alt="" />
              <span>ח. פ: 516793320</span>
            </div>
            <div className="flex items-center gap-2 justify-center px-4">
              <img className="w-4 h-4" src="/@.png" alt="" />
              <span>billing@modusmedi a.io</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 justify-center">
              <img className="w-4 h-4" src="/call.png" alt="" />
              <span>03-9521528</span>
            </div>
            <div className="flex items-center gap-2 justify-end px-4">
              <img className="w-4 h-4" src="/Pin.png" alt="" />
              <span>דרך מנחם בגין 150, מגדל WE, תל אביב–יפו</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Invoice Header Component
const InvoiceHeader = ({ mode }) => {
  const [metaData, setMetaData] = React.useState({
    proposalNumber: "",
    address: "",
    accountName: "",
    contactName: "",
  });
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const itemId = searchParams.get("id");

  React.useEffect(() => {
    if (!itemId) {
      setError("Item ID not found in query parameters");
      setLoading(false);
      return;
    }

    getProposalMetaAndAccount(itemId)
      .then((result) => {
        console.log("Proposal Meta and Account Info:", result);
        setMetaData({
          proposalNumber: result.proposalNumber || "744",
          address: result.address || "משרד דיין 3, ראשון לציין",
          accountName: result.accountName || 'סוויטיים סינמה סיטי ראשלצ בע"מ',
          contactName: result.contactName || "תומר שי",
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching proposal meta/account:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [itemId]);

  if (loading) {
    return <div>טוען...</div>;
  }

  if (error) {
    return <div className="text-red-500">שגיאה: {error}</div>;
  }

  // Get today's date in DD/MM/YYYY format
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  const today = `${day}/${month}/${year}`;

  // Remove 'MS' prefix and any hyphens
  const proposalNumberClean = metaData.proposalNumber
    .replace(/^MS\s*/i, "")
    .replace(/-/g, "");

  return (
    <div dir="rtl" className="mt-12">
      <div className="flex justify-between items-start mb-8">
        <h1
          className={`text-lg md:text-3xl ${
            mode === "dark" ? "text-white" : "text-black"
          }`}
        >
          הצעת מחיר {proposalNumberClean}
        </h1>
        <p
          className={`text-lg md:text-3xl ${
            mode === "dark" ? "text-white" : "text-black"
          }`}
        >
          {today}
        </p>
      </div>
      <div>
        <p
          dir="rtl"
          className={`text-2xl md:text-5xl ${
            mode === "dark" ? "text-white" : "text-black"
          }`}
        >
          {metaData.accountName} - לידי {metaData.contactName}
        </p>
        <p
          className={`text-lg md:text-3xl ${
            mode === "dark" ? "text-white" : "text-black"
          }`}
        >
          {metaData.address}
        </p>
      </div>
    </div>
  );
};

const TableHeader = ({ mode }) => {
  return (
    <div className="md:ps-10 md:pe-24">
      <div className="flex md:gap-4 px-4 font-medium">
        <div
          className={`text-[10px] md:opacity-[80%] ${
            mode === "dark" ? "text-white" : "text-[#042140]"
          } md:text-2xl flex-3`}
        >
          תיאור
        </div>
        <div
          className={`md:text-right md:ps-24 text-[10px] md:opacity-[80%] ${
            mode === "dark" ? "text-white" : "text-[#042140]"
          } md:text-2xl flex-1`}
        >
          כמות
        </div>
        <div
          className={`md:text-right md:pe-1 text-[10px] md:opacity-[80%] ${
            mode === "dark" ? "text-white" : "text-[#042140]"
          } md:text-2xl flex-1`}
        >
          מחיר יח'
        </div>
        <div
          className={`md:text-left text-left md:ps-0 ps-2 text-[10px] md:opacity-[80%] ${
            mode === "dark" ? "text-white" : "text-[#042140]"
          } md:text-2xl flex-1`}
        >
          סה"כ מחיר
        </div>
      </div>
    </div>
  );
};

const parseNumericValue = (value) => {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : null;
  }

  if (typeof value !== "string") {
    return null;
  }

  const normalized = value.replace(/,/g, "").trim();
  if (!normalized) {
    return null;
  }

  // Keep only the first numeric token so surrounding text does not affect totals.
  const match = normalized.match(/-?\d+(?:\.\d+)?/);
  if (!match) {
    return null;
  }

  const parsed = Number(match[0]);
  return Number.isFinite(parsed) ? parsed : null;
};

const isNumericValue = (value) => parseNumericValue(value) !== null;

const TableRow = ({
  description,
  subtitle,
  unit,
  quantity,
  unitPrice,
  totalPrice,
  isTotal = false,
  mode,
}) => {
  const showCurrency = isNumericValue(totalPrice);

  if (isTotal) {
    return (
      <div className="px-6 md:ps-12 md:pe-28">
        <div className="flex justify-between gap-4 py-4">
          <div
            className={`text-right text-xs md:text-2xl md:flex-3 flex-4 ${
              mode === "dark" ? "text-white" : "text-black"
            }`}
          >
            {description}
          </div>
          <div className="flex-1"></div>
          <div className="flex-1"></div>
          <div className="flex-1"></div>
          <div
            className={`text-left font-bold ${
              mode === "dark" ? "text-white" : " text-gradient"
            } text-xs md:text-2xl md:flex-1 gap-4 flex items-center justify-end`}
          >
            <p>{totalPrice}</p>
            {showCurrency && <p>₪</p>}
          </div>
        </div>
      </div>
    );
  }

  const [showPopup, setShowPopup] = React.useState(false);
  const isLongSubtitle = subtitle && subtitle.length > 150;
  const truncatedSubtitle = isLongSubtitle ? subtitle.slice(0, 350) : subtitle;

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Blurred overlay */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              background:
                mode === "dark"
                  ? "rgba(4, 33, 64, 0.50)"
                  : "rgba(255,255,255,0.50)",
              zIndex: 0,
            }}
            onClick={() => setShowPopup(false)}
          />
          {/* Popup */}
          <div
            className="relative z-10 rounded-3xl py-12 pe-2 ps-8 mx-auto w-[400px]"
            style={{
              boxShadow: "0 8px 10px rgba(0,0,0,0.12)",
              background:
                mode === "dark"
                  ? "linear-gradient(#042140, #042140) padding-box, linear-gradient(90deg, rgba(5,172,252,0.4) 0%, rgba(5,71,172,0.4) 50%, rgba(2,230,219,0.4) 100%) border-box"
                  : "linear-gradient(#fff, #fff) padding-box, linear-gradient(90deg, rgba(5,172,252,0.4) 0%, rgba(5,71,172,0.4) 50%, rgba(2,230,219,0.4) 100%) border-box",
              border: "2px solid transparent",
            }}
          >
            {/* Close button */}
            <button
              className={`absolute top-4 right-4 flex items-center justify-center transition-colors rounded-full cursor-pointer w-8 h-8
                ${
                  mode === "dark"
                    ? "bg-[#031428] text-white"
                    : "bg-gray-300 text-[#042140]"
                }
              `}
              onClick={() => setShowPopup(false)}
            >
              <IoIosClose className="w-7 h-7 font-bold" />
            </button>

            {/* Content */}
            <p
              className={`text-right w-full mt-4 ${
                mode === "dark" ? "text-white" : "text-black"
              }`}
              dir="rtl"
            >
              <span className="text-3xl my-2 block">{description} :</span>
              {subtitle}
            </p>
          </div>
        </div>
      )}
      <div className="px-6 md:ps-12 md:pe-28">
        <div className="flex justify-center gap-4 py-2 border-b border-gray-300">
          <div className="text-right flex-3">
            <div
              className={`font-medium text-xs md:text-2xl ${
                mode === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              {description}
            </div>
            {subtitle && (
              <div
                className={`text-[9px] md:text-[14px] ${
                  mode === "dark" ? "text-gray-300" : "text-gray-500"
                } mt-1`}
              >
                {isLongSubtitle ? (
                  <>
                    {truncatedSubtitle}
                    <button
                      className="mr-2 text-blue-500 underline text-xs cursor-pointer"
                      type="button"
                      onClick={() => setShowPopup(true)}
                    >
                      {"." + "קרא עוד"}
                    </button>
                  </>
                ) : (
                  subtitle
                )}
              </div>
            )}
          </div>
          <div
            className={`text-center text-xs md:text-2xl ${
              mode === "dark" ? "text-white" : "text-gray-700"
            } flex-1 gap-4 flex items-center justify-center`}
          >
            {quantity}
          </div>
          <div
            className={`text-center text-xs md:text-2xl ${
              mode === "dark" ? "text-white" : "text-gray-700"
            } flex-1 gap-4 flex items-center justify-center`}
          >
            <p>{unitPrice}</p>
            <p>₪</p>
          </div>
          <div
            className={`text-left text-xs md:text-2xl ${
              mode === "dark" ? "text-white" : "text-gray-700"
            } flex-1 gap-4 flex items-center justify-end`}
          >
            <p>{totalPrice}</p>
            {showCurrency && <p>₪</p>}
          </div>
        </div>
      </div>
    </>
  );
};

const PricingTable = ({
  title,
  mode,
  items = [],
  showDownload = false,
  onDownloadClick,
}) => {
  // Calculate total price
  const totalPrice = items.reduce((sum, item) => {
    const price = parseNumericValue(item.totalPrice);
    return sum + (price ?? 0);
  }, 0);

  return (
    <>
      <style jsx>{`
        @property --angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        @keyframes rotate {
          to {
            --angle: 360deg;
          }
        }

        .rotating-gradient-border {
          position: relative;
          padding: 0px;
          border-radius: 16px;
          background:
            linear-gradient(
                ${mode === "dark" ? "#042140" : "#ffffff"},
                ${mode === "dark" ? "#042140" : "#ffffff"}
              )
              padding-box,
            linear-gradient(var(--angle), #05acfc, #0547ac, #02e6db) border-box;
          border: 1px solid transparent;
          animation: rotate 3s linear infinite;
        }

        .rotating-gradient-button {
          position: relative;
          border-radius: 9999px;
          ${mode === "dark"
            ? `background: linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.01) 100%); border: 0.5px solid rgba(255,255,255,0.4);`
            : `background: linear-gradient(0deg, #05acfc, #0547ac, #02e6db); border: 0.1px solid transparent;`}
        }
      `}</style>

      <div className="flex justify-between items-center mt-8 md:mt-16 mb-14">
        <h2
          className={`text-2xl md:text-5xl ${
            mode === "dark" ? "text-white" : "text-gradient"
          }`}
        >
          {title}
        </h2>
        {showDownload && (
          <div className="rotating-gradient-button">
            <button
              className={`flex items-center gap-2 px-4 md:px-8 py-2 ${
                mode === "dark" ? "text-white" : "bg-white text-black"
              } rounded-full text-xs relative z-10 shadow-none cursor-pointer`}
              style={
                mode === "dark"
                  ? {
                      background:
                        "linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.01) 100%)",
                      border: "1px solid rgba(255,255,255,0.4)",
                    }
                  : {}
              }
              onClick={onDownloadClick}
              type="button"
            >
              <img
                className="w-5 h-5"
                src={mode === "dark" ? "/Save Light.png" : "/Save.png"}
                alt=""
              />
              להוריד PDF
            </button>
          </div>
        )}
      </div>

      {/* Header outside the border */}
      <TableHeader mode={mode} />

      {/* Bordered table body with animated rotating gradient border using CSS custom properties */}
      <div className="rotating-gradient-border mt-2">
        <div
          className={`${
            mode === "dark" ? "bg-[#042140]" : "bg-white"
          } rounded-2xl relative z-10`}
        >
          {items.length > 0 ? (
            items.map((item, index) => (
              <TableRow
                key={index}
                description={item.description}
                subtitle={item.subtitle}
                unit={item.unit}
                quantity={item.quantity}
                unitPrice={item.unitPrice}
                totalPrice={item.totalPrice}
                mode={mode}
              />
            ))
          ) : (
            <div className="p-8 text-center">
              <span
                className={`${
                  mode === "dark" ? "text-white" : "text-gray-600"
                }`}
              >
                אין פריטים להצגה
              </span>
            </div>
          )}

          {items.length > 0 && (
            <TableRow
              description={`סה״כ ${title} לפני מע״מ`}
              unit=""
              quantity=""
              unitPrice=""
              totalPrice={totalPrice.toString()}
              isTotal={true}
              mode={mode}
            />
          )}
        </div>
      </div>
    </>
  );
};

// Footer Component
const Footer = ({ mode }) => {
  return (
    <div className="" dir="rtl">
      <div className="md:p-20 p-4 flex justify-center md:justify-between items-center">
        <div className="right w-[60%] hidden md:block m">
          <h1
            className={`md:text-3xl mb-4 ${
              mode === "dark" ? "text-white" : "text-black"
            }`}
          >
            הדור הבא של פתרונות{" "}
          </h1>
          <h2
            className={`text-3xl md:text-6xl ${
              mode === "dark" ? "text-white" : "text-black"
            }`}
          >
            התקשורת
          </h2>
          <h3
            className={`text-3xl md:text-6xl ${
              mode === "dark" ? "text-white" : "text-black"
            }`}
          >
            והמולטימדיה לעסקים
          </h3>
          <p
            className={`md:text-3xl ${
              mode === "dark" ? "text-white" : "text-black"
            }`}
          >
            תחת קורת גג אחת{" "}
          </p>
        </div>
        <div className="left md:w-[40%] flex flex-col sm:items-center">
          <div className="flex items-center gap-5 md:mb-8 mb-4 mx-auto">
            <div
              dir="ltr"
              className={`text-xl md:text-4xl leading-5 md:leading-9 ${
                mode === "dark" ? "text-white" : "text-black"
              }`}
            >
              <h1>modus</h1>
              <h1>systems</h1>
            </div>
            <img
              className="w-16 h-16 md:w-22 md:h-23"
              src={mode === "dark" ? "/Logo.png" : "/Logo light.png"}
              alt=""
            />
            <div
              className={`text-xl md:text-4xl leading-5 md:leading-9 ${
                mode === "dark" ? "text-white" : "text-black"
              }`}
            >
              <h1>מודוס</h1>
              <h1>מערכות</h1>
            </div>
          </div>
          <div className="hidden md:block">
            <p
              style={{
                direction: "rtl",
                textAlign: "right",
                textWrap: "balance",
                wordSpacing: "0.55rem", // <-- sweet spot
                maxWidth: "70ch", // <-- creates the clean justified "box"
              }}
              className={` ${
                mode === "dark" ? "text-white" : "text-[#042140]"
              }  text-sm md:text-base leading-5`}
            >
              מאז שנת 2014 חברת מודוס מתמחה בפרויקטים בתחום
            </p>
            <p
              style={{
                direction: "rtl",
                textAlign: "right",
                textWrap: "balance",
                wordSpacing: "0.35rem", // <-- sweet spot
                maxWidth: "70ch", // <-- creates the clean justified "box"
              }}
              className={` ${
                mode === "dark" ? "text-white" : "text-[#042140]"
              }  text-sm md:text-base leading-5`}
            >
              התקשורת, מתח נמוך ומולטימדיה. בשנתיים האחרונות הקמנו
            </p>
            <p
              style={{
                direction: "rtl",
                textAlign: "right",
                textWrap: "balance",
                wordSpacing: "0.44rem", // <-- sweet spot
                maxWidth: "70ch", // <-- creates the clean justified "box"
              }}
              className={` ${
                mode === "dark" ? "text-white" : "text-[#042140]"
              }  text-sm md:text-base leading-5`}
            >
              מחלקת מחשוב עם התמחות בפתרונות תקשורת מתקדמים
            </p>
            <p
              style={{
                textAlign: "right",
                wordSpacing: "0.44rem", // <-- sweet spot
              }}
              className={`text-right ${
                mode === "dark" ? "text-white" : "text-[#042140]"
              }  text-sm mb-4 md:text-base leading-5`}
            >
              והכל תחת קורת גג אחת.
            </p>{" "}
          </div>
          <div className="block md:hidden">
            <p
              className={`text-center ${
                mode === "dark" ? "text-white" : "text-[#042140]"
              }  text-sm mb-4 md:text-base leading-5`}
            >
              מאז שנת 2014 חברת מודוס מתמחה בפרויקטים בתחום התקשורת, מתח נמוך
              ומולטימדיה. בשנתיים האחרונות הקמנו מחלקת מחשוב עם התמחות בפתרונות
              תקשורת מתקדמים והכל תחת קורת גג אחת. 
            </p>
          </div>
          <p
            className={`text-center ${
              mode === "dark" ? "text-white" : "text-[#042140]"
            } md:text-justify text-sm mb-4 md:text-base leading-5`}
          >
            אנחנו מציעים חלופה מתקדמת ששמה את הלקוח במרכז. מעמידים ללקוחות שלנו
            מרכז שירות ותמיכה מתקדמים עם היענות גבוהה מסביב לשעון.
          </p>
          <p
            className={`text-center ${
              mode === "dark" ? "text-white" : "text-[#042140]"
            } md:text-justify text-sm mb-4 md:text-base leading-5`}
          >
            נמשיך לפתח מוצרים וממשקים “אין האוס” כחול-לבן, כדיי להוביל את השוק
            לצד לקוחותינו , בחוד החנית הטכנולוגית.
          </p>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="py-8 border-t border-gray-400 flex justify-between items-center">
        <p
          className={`text-lg md:text-2xl ${
            mode === "dark" ? "text-white" : "text-[#042140]"
          }`}
        >
          מודוס מולטימדיה בע"מ
        </p>
        <p
          className={`text-lg md:text-2xl ${
            mode === "dark" ? "text-white" : "text-[#042140]"
          }`}
        >
          2025
        </p>
      </div>
    </div>
  );
};

// Helper function to get query parameters
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Data processing function
const processApiData = (apiResponse) => {
  if (!apiResponse?.data?.items?.[0]?.subitems) {
    return { recurringItems: [], oneTimeItems: [] };
  }

  const subitems = apiResponse.data.items[0].subitems;
  const recurringItems = [];
  const oneTimeItems = [];

  subitems.forEach((subitem) => {
    const columnValues = subitem.column_values || [];
    let status = "";
    let description = "";
    let subtitle = "";
    let unit = "יח'";
    let quantity = "1";
    let unitPrice = "";
    let totalPrice = "";

    // Process description: use board_relation_mksymdzw display_value, fallback to subitem.name
    const relationDescription =
      columnValues.find((col) => col.id === "board_relation_mksymdzw")
        ?.display_value || "";

    // Use board_relation_mksymdzw display_value if it exists, otherwise use subitem.name
    if (relationDescription.trim()) {
      description = relationDescription;
    } else {
      description = subitem.name || "פריט";
    }

    // Process each column value
    columnValues.forEach((column) => {
      const columnId = column.id || "";
      const displayValue = column.display_value || "";
      const textValue = column.text || "";
      const columnTitle = column.column?.title?.toLowerCase() || "";

      // Determine status for categorization
      if (columnId === "color_mkszp4jg") {
        status = textValue || displayValue;
      }

      // Handle subtitle (description column)
      if (
        columnId === "long_text_mksy9egc" ||
        columnTitle.includes("description")
      ) {
        subtitle = displayValue || textValue || subtitle;
      }

      // Handle unit measure with lookup priority
      if (columnTitle.includes("unit") || columnTitle.includes("מידה")) {
        if (columnId.includes("lookup")) {
          unit = displayValue || textValue || unit;
        } else {
          unit = displayValue || textValue || unit;
        }
      }

      // Handle quantity
      if (columnId === "numeric_mksyftx0" || columnTitle.includes("quantity")) {
        quantity = textValue || displayValue || quantity;
      }

      // Handle unit price with lookup priority
      if (
        columnTitle.includes("unit price") ||
        columnTitle.includes("מחיר יח")
      ) {
        if (columnId.includes("lookup")) {
          unitPrice = displayValue || textValue || unitPrice;
        } else {
          unitPrice = textValue || displayValue || unitPrice;
        }
      }

      // Handle total price
      if (
        columnId === "formula_mksy3sr8" ||
        columnTitle.includes("total") ||
        columnTitle.includes('סה"כ')
      ) {
        totalPrice = textValue || displayValue || totalPrice;
      }
    });

    // Calculate total price if not provided
    if (!totalPrice && unitPrice && quantity) {
      const unitPriceNum = parseFloat(unitPrice);
      const quantityNum = parseFloat(quantity);
      if (!isNaN(unitPriceNum) && !isNaN(quantityNum)) {
        totalPrice = (unitPriceNum * quantityNum).toString();
      }
    }

    const processedItem = {
      description,
      subtitle,
      unit,
      quantity,
      unitPrice: unitPrice || "0",
      totalPrice: totalPrice || unitPrice || "0",
    };

    // Categorize based on status
    if (
      status.toLowerCase().includes("recurring") ||
      status.toLowerCase().includes("חוזר")
    ) {
      recurringItems.push(processedItem);
    } else {
      oneTimeItems.push(processedItem);
    }
  });

  return { recurringItems, oneTimeItems };
};

// Main Invoice Component
const Invoice = ({ mode, setMode }) => {
  const [recurringItems, setRecurringItems] = React.useState([]);
  const [oneTimeItems, setOneTimeItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [pdfFile, setPdfFile] = React.useState(null);
  const [pdfGenerating, setPdfGenerating] = React.useState(false);
  const [pdfGenerated, setPdfGenerated] = React.useState(false);
  const pdfGeneratedRef = useRef(false);
  const [showToast, setShowToast] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");
  const [mondayData, setMondayData] = React.useState([]);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const itemId = searchParams.get("id");

  // Simplified PDF generation using dom-to-image
  const generatePDF = React.useCallback(async (mondayResponse) => {
    if (pdfGeneratedRef.current) return;
    pdfGeneratedRef.current = true;
    setPdfGenerating(true);
    setShowToast(true);
    setToastMessage("📄 Generating PDF...");

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Get the element to capture
      const element =
        document.querySelector(".PDF") || document.querySelector("body");
      if (!element) {
        throw new Error("Element not found");
      }

      // Get actual element dimensions
      const elementWidth = element.scrollWidth;
      const elementHeight = element.scrollHeight;

      // Use slightly larger than 2x scale for a modest quality bump
      // (keeps file size reasonable while improving sharpness)
      const scale = 2.2;

      // Convert DOM element to JPEG with optimized quality
      const jpegDataUrl = await domtoimage.toJpeg(element, {
        quality: 0.9, // Slightly higher quality for sharper PDF (still reasonable size)
        width: elementWidth * scale,
        height: elementHeight * scale,
        style: {
          "box-shadow": "none",
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          width: `${elementWidth}px`,
          height: `${elementHeight}px`,
          // Improve font rendering
          "-webkit-font-smoothing": "antialiased",
          "-moz-osx-font-smoothing": "grayscale",
          "text-rendering": "optimizeLegibility",
        },
        // Improve pixel ratio for retina displays
        pixelRatio: scale,
      });

      // Convert pixels to mm with proper scaling
      const pdfWidth = elementWidth * 0.264583;
      const pdfHeight = elementHeight * 0.264583;

      // Create PDF with dynamic height based on content and compression
      const pdf = new jsPDF({
        orientation: "p",
        unit: "mm",
        format: [pdfWidth, pdfHeight],
        compress: true, // Enable compression
        precision: 3, // A bit more precision for improved rendering
      });

      // Add JPEG image with compression
      pdf.addImage(
        jpegDataUrl,
        "JPEG",
        0,
        0,
        pdfWidth,
        pdfHeight,
        undefined,
        "FAST", // Use fast compression
      );

      // Generate filename
      let subitemName = "";
      if (mondayResponse?.data?.items?.[0]?.name) {
        subitemName = mondayResponse.data.items[0].name;
      } else if (mondayResponse?.[0]?.name) {
        subitemName = mondayResponse[0].name;
      }

      const now = new Date();
      const dateStr = now.toLocaleDateString("he-IL").replace(/\//g, ".");
      const timeStr = now
        .toLocaleTimeString("he-IL", { hour12: false })
        .replace(/:/g, ".");

      const fileName = `מודוס מדיה הצעה ${subitemName} ${dateStr}.${timeStr}.pdf`;

      // Create file
      const pdfBlob = pdf.output("blob");
      const file = new File([pdfBlob], fileName, { type: "application/pdf" });

      setPdfFile(file);
      setPdfGenerated(true);
      setPdfGenerating(false);
      setShowToast(true);
      setToastMessage("✅ PDF ready for download");
      setTimeout(() => setShowToast(false), 3000);

      // Upload to Dropbox/Monday if needed
      try {
        const dropboxTargetPath = `/Shiran Tal/Modus/הצעות מחיר/${fileName}`;
        // Extract the Monday item object from the response
        const mondayItem =
          mondayResponse?.data?.items?.[0] || mondayResponse?.[0];
        console.log("Uploading PDF to Dropbox at:", mondayItem);
        if (mondayItem) {
          // Pass the itemId from URL query parameter
          await uploadAndLinkToMonday(file, dropboxTargetPath, itemId);
        } else {
          console.warn("No Monday item data available for upload");
        }
      } catch (uploadError) {
        console.error("Upload error:", uploadError);
      }
    } catch (error) {
      console.error("PDF generation failed:", error);
      setPdfGenerating(false);
      setShowToast(true);
      setToastMessage("❌ PDF generation failed");
      setTimeout(() => setShowToast(false), 3000);
    }
  }, []);

  // Download function - uses the stored PDF
  const downloadPDF = React.useCallback(() => {
    if (!pdfFile) {
      console.error("No PDF file available for download");
      return;
    }

    // Create download link
    const url = URL.createObjectURL(pdfFile);
    const link = document.createElement("a");
    link.href = url;
    link.download = pdfFile.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    console.log("✅ PDF downloaded:", pdfFile.name);
  }, [pdfFile]);

  React.useEffect(() => {
    let isMounted = true;
    if (!itemId) {
      setLoading(false);
      return;
    }
    setLoading(true);
    import("./monday").then(({ getSubitemsByItemId }) => {
      getSubitemsByItemId(itemId)
        .then((response) => {
          if (!isMounted) return;
          console.log("Monday.com API response:", response);
          const { recurringItems, oneTimeItems } = processApiData(response);
          setRecurringItems(recurringItems);
          setOneTimeItems(oneTimeItems);
          setMondayData(response);
          setTimeout(() => {
            generatePDF(response);
          }, 3000);
        })
        .catch((error) => {
          if (!isMounted) return;
          console.error("Error fetching subitems:", error);
          setError(error.message);
        })
        .finally(() => {
          if (!isMounted) return;
          setLoading(false);
        });
    });

    return () => {
      isMounted = false;
    };
  }, [itemId]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 text-lg font-semibold">שגיאה: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen bundlewith ${
        mode === "dark" ? "bg-[#042140]" : "bg-white"
      }`}
      dir="rtl"
    >
      <Header mode={mode} setMode={setMode} />
      <div className="px-3 max-w-[1200px] mx-auto">
        <CompanyInfo mode={mode} />
        <hr className="bg-gray-500 h-[0.5px] border-0" />
        <InvoiceHeader mode={mode} />
        {recurringItems.length > 0 && (
          <PricingTable
            title="תשלום חודשי קבוע"
            mode={mode}
            items={recurringItems}
            showDownload={true}
            onDownloadClick={downloadPDF}
          />
        )}
        {oneTimeItems.length > 0 && (
          <PricingTable
            title="תשלום חד פעמי"
            mode={mode}
            items={oneTimeItems}
            showDownload={false}
          />
        )}
        <Footer mode={mode} />

        {/* Toast Notification for PDF Status */}
        {showToast && (
          <div
            className="fixed bottom-4 right-4 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in-out"
            style={{ minWidth: "180px", textAlign: "center" }}
          >
            {toastMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default Invoice;
