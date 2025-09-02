import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// HeaderPDF Component
const HeaderPDF = ({ mode, setMode }) => {
  return (
    <div
      className="text-white px-8 py-8 relative"
      style={{ background: "linear-gradient(90deg, #062D57 0%, #031327 100%)" }}
    >
      <div
        className={`absolute left-30 -bottom-[28%] ${
          mode === "dark" ? "bg-[#042140]" : "bg-white"
        } w-40 h-40 rounded-full flex justify-center items-center`}
      >
        <img
          className="w-30 h-30 me-3"
          src={mode === "dark" ? "/Logo.png" : "/Logo light.png"}
          alt=""
        />
      </div>
      <div className="mx-auto ps-[30%]">
        <h1 className="text-2xl mb-4">הדין רמא של פתרונות</h1>
        <h2 className="text-5xl">התקשורת</h2>
        <h3 className="text-5xl">והמולטימדיה לעסקים</h3>
        <p className="text-2xl">תחת קרית נט אחות</p>
      </div>
    </div>
  );
};

// CompanyInfoPDF Component
const CompanyInfoPDF = ({ mode }) => {
  return (
    <div dir="rtl" className="mt-16 mb-8 mx-auto max-w-[1200px]">
      <h2
        className={`text-4xl font-extrabold ${
          mode === "dark" ? "text-white" : "text-[#042140]"
        } mb-8`}
      >
        מודוס מערכות
      </h2>
      <div className="mb-6">
        <div
          className={`flex justify-between items-center ${
            mode === "dark" ? "text-white" : "text-gray-600"
          } text-xl`}
        >
          <div className="flex-1">ניהול רשתות</div>
          <div className="text-center flex-1 border-r border-gray-400 px-4">
            מרכזיה בענן
          </div>
          <div className="text-center flex-2 border-r border-gray-400 px-2">
            תשתיות תקשורת קווית ואלחוטית
          </div>
          <div className="text-center flex-1 border-r border-gray-400 px-4">
            מערכות מתח נמוך
          </div>
          <div className="text-left border-r ps-4 border-gray-400">
            פתרונות אודיו-וידאו
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div
          className={`flex justify-between items-center ${
            mode === "dark" ? "text-white" : "text-gray-600"
          } text-xl`}
        >
          <div className="flex items-center gap-2 flex-1">
            <img src="/Home.png" alt="" />
            <span>ח.פ: 516793320</span>
          </div>
          <div className="flex items-center gap-2 flex-1 justify-center px-4">
            <img src="/@.png" alt="" />
            <span>billing@modusmedia.io</span>
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
    </div>
  );
};

// InvoiceHeaderPDF Component
const InvoiceHeaderPDF = ({ mode }) => {
  return (
    <div dir="rtl" className="mt-12">
      <div className="flex justify-between items-start mb-8">
        <h1
          className={`text-3xl ${
            mode === "dark" ? "text-white" : "text-black"
          }`}
        >
          הצעת מחיר 744
        </h1>
        <p
          className={`text-3xl ${
            mode === "dark" ? "text-white" : "text-black"
          }`}
        >
          10/07/2025
        </p>
      </div>
      <div>
        <p
          className={`text-5xl ${
            mode === "dark" ? "text-white" : "text-black"
          }`}
        >
          סוויטיים סינמה סיטי ראשלצ בע"מ - לידי תומר שי
        </p>
        <p
          className={`text-3xl ${
            mode === "dark" ? "text-white" : "text-black"
          }`}
        >
          משרד דיין 3, ראשון לציין
        </p>
      </div>
    </div>
  );
};

// TableHeaderPDF Component
const TableHeaderPDF = ({ mode }) => {
  return (
    <div className="px-10">
      <div className="flex justify-between gap-4 px-6 font-medium">
        <div
          className={`text-2xl opacity-[80%] ${
            mode === "dark" ? "text-white" : "text-[#042140]"
          } flex-3`}
        >
          תיאור
        </div>
        <div
          className={`text-center text-2xl opacity-[80%] ${
            mode === "dark" ? "text-white" : "text-[#042140]"
          } flex-1`}
        >
          כמות
        </div>
        <div
          className={`text-center text-2xl opacity-[80%] ${
            mode === "dark" ? "text-white" : "text-[#042140]"
          } flex-1`}
        >
          מחיר יח'
        </div>
        <div
          className={`text-center text-2xl opacity-[80%] ${
            mode === "dark" ? "text-white" : "text-[#042140]"
          } flex-1`}
        >
          סה"כ מחיר
        </div>
      </div>
    </div>
  );
};

// TableRowPDF Component
const TableRowPDF = ({
  description,
  subtitle,
  unit,
  quantity,
  unitPrice,
  totalPrice,
  isTotal = false,
  mode,
}) => {
  if (isTotal) {
    return (
      <div className="px-6">
        <div className="flex justify-between gap-4 px-6 py-4">
          <div
            className={`text-right text-2xl flex-3 ${
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
            } text-2xl flex-1`}
          >
            {totalPrice} ₪
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6">
      <div className="flex justify-between gap-4 px-6 py-2 border-b border-gray-300">
        <div className="text-right flex-3">
          <div
            className={`font-medium text-2xl ${
              mode === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            {description}
          </div>
          {subtitle && (
            <div
              className={`text-[14px] ${
                mode === "dark" ? "text-gray-300" : "text-gray-500"
              } mt-1`}
            >
              {subtitle}
            </div>
          )}
        </div>
        <div
          className={`text-center text-2xl ${
            mode === "dark" ? "text-white" : "text-gray-700"
          } flex-1`}
        >
          {quantity}
        </div>
        <div
          className={`text-center text-2xl ${
            mode === "dark" ? "text-white" : "text-gray-700"
          } flex-1`}
        >
          {unitPrice} ₪
        </div>
        <div
          className={`text-left text-2xl font-medium ${
            mode === "dark" ? "text-white" : "text-gray-800"
          } flex-1`}
        >
          {totalPrice} ₪
        </div>
      </div>
    </div>
  );
};

// PricingTablePDF Component
const PricingTablePDF = ({ title, mode, items = [], showDownload = false }) => {
  const totalPrice = items.reduce((sum, item) => {
    const price = parseFloat(item.totalPrice) || 0;
    return sum + price;
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
          background: linear-gradient(
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

      <div className="flex justify-between items-center mt-16 mb-14">
        <h2
          className={`text-5xl ${
            mode === "dark" ? "text-white" : "text-gradient"
          }`}
        >
          {title}
        </h2>
      </div>
      <TableHeaderPDF mode={mode} />
      <div className="rotating-gradient-border mt-2">
        <div
          className={`${
            mode === "dark" ? "bg-[#042140]" : "bg-white"
          } rounded-2xl relative z-10`}
        >
          {items.length > 0 ? (
            items.map((item, index) => (
              <TableRowPDF
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
                } text-2xl`}
              >
                אין פריטים להצגה
              </span>
            </div>
          )}
          {items.length > 0 && (
            <TableRowPDF
              description={`סה״כ ${title}`}
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

// FooterPDF Component
const FooterPDF = ({ mode }) => {
  return (
    <div className="" dir="rtl">
      <div className="p-20 flex justify-between items-center">
        <div className="right w-[60%]">
          <h1
            className={`text-3xl mb-4 ${
              mode === "dark" ? "text-white" : "text-black"
            }`}
          >
            הדור הבא של פתרונות{" "}
          </h1>
          <h2
            className={`text-6xl ${
              mode === "dark" ? "text-white" : "text-black"
            }`}
          >
            התקשורת
          </h2>
          <h3
            className={`text-6xl ${
              mode === "dark" ? "text-white" : "text-black"
            }`}
          >
            והמולטימדיה לעסקים
          </h3>
          <p
            className={`text-3xl ${
              mode === "dark" ? "text-white" : "text-black"
            }`}
          >
            תחת קורת גג אחת{" "}
          </p>
        </div>
        <div className="left w-[40%] flex flex-col items-center">
          <div className="flex items-center gap-5 mb-8">
            <div
              dir="ltr"
              className={`text-4xl leading-9 ${
                mode === "dark" ? "text-white" : "text-black"
              }`}
            >
              <h1>modus</h1>
              <h1>systems</h1>
            </div>
            <img
              className="w-22 h-23"
              src={mode === "dark" ? "/Logo.png" : "/Logo light.png"}
              alt=""
            />
            <div
              className={`text-4xl leading-9 ${
                mode === "dark" ? "text-white" : "text-black"
              }`}
            >
              <h1>מודוס</h1>
              <h1>מערכות</h1>
            </div>
          </div>
          <p
            className={`text-justify text-base leading-5 ${
              mode === "dark" ? "text-white" : "text-[#042140]"
            } mb-4`}
          >
            מאז שנת 2013 העמקנו בעולם התקשורת לעסקים, הבנו את הפער בהיצע מול
            הביקוש, פיצחנו את הצרכים הייחודיים והתאמנו פתרון כולל המאפשר לנו תחת
            קורת גג אחת להקים ולתפעל את כלל הצרכים בתחום התקשורת לחברות ועסקים. 
          </p>
          <p
            className={`text-justify text-base leading-5 ${
              mode === "dark" ? "text-white" : "text-[#042140]"
            } mb-4`}
          >
            לתת אלטרנטיבה שפויה ששמה את הלקוח במרכז בעולם התקשורת העסקית. אנחנו
            בוחרים מידי יום להתנהל בצורה שתתמוך בלקוחות שלנו ומבינה את הלחצים
            בהם הם מתנהלים. 
          </p>
          <p
            className={`text-justify text-base leading-5 ${
              mode === "dark" ? "text-white" : "text-[#042140]"
            } mb-4`}
          >
            חדשנות טכנולוגית היא ביטוי המפתח. אנחנו מפתחים פתרונות תוכנה שיקלו
            על הלקוח, בונים גשרים על ידי פיתוח ממשקים ודואגים לספק פתרונות
            יצירתיים וחכמים לבעיות היומיות איתן הלקוח מתמודד. 
          </p>
        </div>
      </div>
      <div className="py-8 border-t border-gray-400 flex justify-between items-center">
        <p
          className={`text-2xl ${
            mode === "dark" ? "text-white" : "text-[#042140]"
          }`}
        >
          מודוס מולטימדיה בע"מ
        </p>
        <p
          className={`text-2xl ${
            mode === "dark" ? "text-white" : "text-[#042140]"
          }`}
        >
          2025
        </p>
      </div>
    </div>
  );
};

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

    const lookupDescription =
      columnValues.find((col) => col.id === "lookup_mksycx2a")?.display_value ||
      "";
    const relationDescription =
      columnValues.find((col) => col.id === "board_relation_mksymdzw")
        ?.display_value || "";
    description =
      lookupDescription || relationDescription || subitem.name || "פריט";

    columnValues.forEach((column) => {
      const columnId = column.id || "";
      const displayValue = column.display_value || "";
      const textValue = column.text || "";
      const columnTitle = column.column?.title?.toLowerCase() || "";

      if (columnId === "color_mkszp4jg") {
        status = textValue || displayValue;
      }

      if (
        columnId === "long_text_mksy9egc" ||
        columnTitle.includes("description")
      ) {
        subtitle = displayValue || textValue || subtitle;
      }

      if (columnTitle.includes("unit") || columnTitle.includes("מידה")) {
        if (columnId.includes("lookup")) {
          unit = displayValue || textValue || unit;
        } else {
          unit = displayValue || textValue || unit;
        }
      }

      if (columnId === "numeric_mksyftx0" || columnTitle.includes("quantity")) {
        quantity = textValue || displayValue || quantity;
      }

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

      if (
        columnId === "formula_mksy3sr8" ||
        columnTitle.includes("total") ||
        columnTitle.includes('סה"כ')
      ) {
        totalPrice = textValue || displayValue || totalPrice;
      }
    });

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

// InvoicePDF Component
const InvoicePDF = ({ mode }) => {
  const [recurringItems, setRecurringItems] = useState([]);
  const [oneTimeItems, setOneTimeItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const itemId = searchParams.get("id");

  useEffect(() => {
    if (!itemId) {
      setLoading(false);
      return;
    }
    setLoading(true);
    import("./monday").then(({ getSubitemsByItemId }) => {
      getSubitemsByItemId(itemId)
        .then((response) => {
          console.log("Monday.com API response:", response);
          const { recurringItems, oneTimeItems } = processApiData(response);
          setRecurringItems(recurringItems);
          setOneTimeItems(oneTimeItems);
        })
        .catch((error) => {
          console.error("Error fetching subitems:", error);
          setError(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  }, [itemId]);

  if (loading) {
    return (
      <div className="min-h-screen z-[-1] items-center justify-center flex">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-lg font-semibold">טוען נתונים מהמערכת...</p>
        </div>
      </div>
    );
  }

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
      className={`PDF min-h-screen z-[-1] absolute top-0 left-0 w-[1520px] ${
        mode === "dark" ? "bg-[#042140]" : "bg-white"
      }`}
      dir="rtl"
    >
      <HeaderPDF mode={mode} />
      <div className="px-3 w-[1200px] mx-auto">
        <CompanyInfoPDF mode={mode} />
        <hr className="bg-gray-500 h-[0.5px] border-0" />
        <InvoiceHeaderPDF mode={mode} />
        {recurringItems.length > 0 && (
          <PricingTablePDF
            title="תשלום חודשי קבוע"
            mode={mode}
            items={recurringItems}
            showDownload={true}
          />
        )}
        {oneTimeItems.length > 0 && (
          <PricingTablePDF
            title="תשלום חד פעמי"
            mode={mode}
            items={oneTimeItems}
            showDownload={false}
          />
        )}
        <FooterPDF mode={mode} />
      </div>
    </div>
  );
};

export default InvoicePDF;
