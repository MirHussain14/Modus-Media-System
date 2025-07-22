import React from "react";
import { useLocation } from "react-router-dom";

// Header Component
const Header = ({ mode, setMode }) => {
  return (
    <div
      className="text-white px-4 py-6 md:px-8 md:py-8 relative"
      style={{ background: "linear-gradient(90deg, #062D57 0%, #031327 100%)" }}
    >
      <div dir="ltr" className="flex items-center space-x-8 md:px-20">
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
        className={`absolute left-5 -bottom-[21%] md:left-30 md:-bottom-[28%] ${
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
        <h1 className="md:text-2xl mb-4">הדין רמא של פתרונות</h1>
        <h2 className="text-3xl md:text-5xl">התקשורת</h2>
        <h3 className="text-3xl md:text-5xl">והמולטימדיה לעסקים</h3>
        <p className="md:text-2xl">תחת קרית נט אחות</p>
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
      <div className="mb-6 hidden md:block">
        <div
          className={`flex justify-between items-center ${
            mode === "dark" ? "text-white" : "text-gray-600"
          } text-2xl`}
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

      {/* Services Row - Mobile (2 rows) */}
      <div className="mb-6 md:hidden">
        <div
          className={`${
            mode === "dark" ? "text-white" : "text-gray-600"
          } text-xs`}
        >
          <div className="flex justify-between items-center mb-2">
            <div className="flex-1">ניהול רשתות</div>
            <div className="text-center flex-1 border-r border-gray-500 px-2">
              מרכזיה בענן
            </div>
            <div className="text-left px-2 flex-2 border-r border-gray-500">
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
          } text-2xl`}
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

      {/* Contact Info Row - Mobile (2 rows) */}
      <div className="mt-8 md:hidden">
        <div
          className={`${
            mode === "dark" ? "text-white" : "text-gray-600"
          } text-xs`}
        >
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2 justify-center">
              <img className="w-4 h-4" src="/Home.png" alt="" />
              <span>ח.פ: 516793320</span>
            </div>
            <div className="flex items-center gap-2 justify-center px-4">
              <img className="w-4 h-4" src="/@.png" alt="" />
              <span>billing@modusmedia.io</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 justify-center">
              <img className="w-4 h-4" src="/call.png" alt="" />
              <span>03-9521528</span>
            </div>
            <div className="flex items-center gap-2 justify-center px-4">
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
  return (
    <div dir="rtl" className="mt-12">
      <div className="flex justify-between items-start mb-8">
        <h1
          className={`text-lg md:text-3xl ${
            mode === "dark" ? "text-white" : "text-black"
          }`}
        >
          הצעת מחיר 744
        </h1>
        <p
          className={`text-lg md:text-3xl ${
            mode === "dark" ? "text-white" : "text-black"
          }`}
        >
          10/07/2025
        </p>
      </div>
      <div>
        <p
          dir="rtl"
          className={`text-2xl md:text-5xl ${
            mode === "dark" ? "text-white" : "text-black"
          }`}
        >
          סוויטיים סינמה סיטי ראשלצ בע"מ - לידי תומר שי
        </p>
        <p
          className={`text-lg md:text-3xl ${
            mode === "dark" ? "text-white" : "text-black"
          }`}
        >
          משרד דיין 3, ראשון לציין
        </p>
      </div>
    </div>
  );
};

const TableHeader = ({ mode }) => {
  return (
    <div className="md:px-6">
      <div className="flex justify-between md:gap-4 px-4 font-medium">
        <div
          className={`text-xs md:opacity-[80%] ${
            mode === "dark" ? "text-white" : "text-[#042140]"
          } md:text-2xl flex-3`}
        >
          תיאור
        </div>
        <div
          className={`md:text-center hidden md:block text-xs md:opacity-[80%] ${
            mode === "dark" ? "text-white" : "text-[#042140]"
          } md:text-2xl flex-1`}
        >
          יח' מידה
        </div>
        <div
          className={`md:text-center text-xs md:opacity-[80%] ${
            mode === "dark" ? "text-white" : "text-[#042140]"
          } md:text-2xl flex-1`}
        >
          כמות
        </div>
        <div
          className={`md:text-center text-xs md:opacity-[80%] ${
            mode === "dark" ? "text-white" : "text-[#042140]"
          } md:text-2xl flex-1`}
        >
          מחיר יח'
        </div>
        <div
          className={`md:text-center text-xs md:opacity-[80%] ${
            mode === "dark" ? "text-white" : "text-[#042140]"
          } md:text-2xl flex-1`}
        >
          סה"כ מחיר
        </div>
      </div>
    </div>
  );
};

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
  if (isTotal) {
    return (
      <div className="md:px-6">
        <div className="flex justify-between gap-4 px-6 py-4">
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
            className={`text-center font-bold ${
              mode === "dark" ? "text-white" : " text-gradient"
            } text-xs md:text-2xl md:flex-1`}
          >
            {totalPrice} ₪
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="md:px-6">
      <div className="flex justify-between gap-4 px-4 md:px-6 py-2 border-b border-gray-300">
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
              {subtitle}
            </div>
          )}
        </div>
        <div
          className={`text-center text-xs hidden md:block md:text-2xl ${
            mode === "dark" ? "text-white" : "text-gray-700"
          } flex-1`}
        >
          {unit || 'יח\''}
        </div>
        <div
          className={`text-center text-xs md:text-2xl ${
            mode === "dark" ? "text-white" : "text-gray-700"
          } flex-1`}
        >
          {quantity}
        </div>
        <div
          className={`text-center text-xs md:text-2xl ${
            mode === "dark" ? "text-white" : "text-gray-700"
          } flex-1`}
        >
          {unitPrice} ₪
        </div>
        <div
          className={`text-center text-xs md:text-2xl font-medium ${
            mode === "dark" ? "text-white" : "text-gray-800"
          } flex-1`}
        >
          {totalPrice} ₪
        </div>
      </div>
    </div>
  );
};

const PricingTable = ({ title, mode, items = [], showDownload = false }) => {
  // Calculate total price
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
          ) padding-box,
          linear-gradient(
            var(--angle),
            #05acfc,
            #0547ac,
            #02e6db
          ) border-box;
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
                mode === "dark"
                  ? "text-white"
                  : "bg-white text-black"
              } rounded-full text-xs relative z-10 shadow-none`}
              style={mode === "dark"
                ? { background: "linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.01) 100%)", border: "1px solid rgba(255,255,255,0.4)" }
                : {}}
            >
              <img className="w-5 h-5" src={mode === "dark" ? "/Save Light.png" : "/Save.png"} alt="" />
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
              <span className={`${mode === "dark" ? "text-white" : "text-gray-600"}`}>
                אין פריטים להצגה
              </span>
            </div>
          )}
          
          {items.length > 0 && (
            <TableRow
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

// Footer Component
const Footer = ({ mode }) => {
  return (
    <div className="" dir="rtl">
      <div className="md:p-20 p-4 flex justify-center md:justify-between items-center">
        <div className="right w-[60%] hidden md:block">
          <h1
            className={`md:text-3xl mb-4 ${
              mode === "dark" ? "text-white" : "text-black"
            }`}
          >
            הדין רמא של פתרונות
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
            תחת קרית נט אחות
          </p>
        </div>
        <div className="left md:w-[40%] flex flex-col items-center">
          <div className="flex items-center gap-5 md:mb-8 mb-4">
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
          <p
            className={`text-center ${
              mode === "dark" ? "text-white" : "text-[#042140]"
            } md:text-justify text-sm mb-4 md:text-base leading-5`}
          >
            מאז שנת 2014 חברת מודוס מתמחה בפרויקטים בתחום התקשורת, מתח נמוך
            ומולטימדיה. בשנתיים האחרונות הקמנו מחלקת מחשוב עם התמחות בפתרונות
            תקשורת מתקדמים והכל תחת קורת גג אחת.
          </p>
          <p
            className={`text-center ${
              mode === "dark" ? "text-white" : "text-[#042140]"
            } md:text-justify text-sm mb-4 md:text-base leading-5`}
          >
            אנחנו מציעים חלופה מתקדמת ששמה את הלקוח במרכז. מעמידים ללקוחות שלנו
            מרכז שירות ותמיכה מתקדמים עם היענות גבוהה מסביב לשעון .
          </p>
          <p
            className={`text-center ${
              mode === "dark" ? "text-white" : "text-[#042140]"
            } md:text-justify text-sm mb-4 md:text-base leading-5`}
          >
            נמשיך לפתח מוצרים וממשקים "אין האוס" כחול-לבן, כדיי להוביל את השוק
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
    let status = '';
    let description = '';
    let subtitle = '';
    let unit = 'יח\'';
    let quantity = '1';
    let unitPrice = '';
    let totalPrice = '';

    // Process description with priority: lookup_mksycx2a > board_relation_mksymdzw > name
    const lookupDescription = columnValues.find(col => col.id === 'lookup_mksycx2a')?.display_value || '';
    const relationDescription = columnValues.find(col => col.id === 'board_relation_mksymdzw')?.display_value || '';
    description = lookupDescription || relationDescription || subitem.name || 'פריט';

    // Process each column value
    columnValues.forEach((column) => {
      const columnId = column.id || '';
      const displayValue = column.display_value || '';
      const textValue = column.text || '';
      const columnTitle = column.column?.title?.toLowerCase() || '';

      // Determine status for categorization
      if (columnId === 'color_mkszp4jg') {
        status = textValue || displayValue;
      }

      // Handle subtitle (description column)
      if (columnId === 'long_text_mksy9egc' || columnTitle.includes('description')) {
        subtitle = displayValue || textValue || subtitle;
      }

      // Handle unit measure with lookup priority
      if (columnTitle.includes('unit') || columnTitle.includes('מידה')) {
        if (columnId.includes('lookup')) {
          unit = displayValue || textValue || unit;
        } else {
          unit = displayValue || textValue || unit;
        }
      }

      // Handle quantity
      if (columnId === 'numeric_mksyftx0' || columnTitle.includes('quantity')) {
        quantity = textValue || displayValue || quantity;
      }

      // Handle unit price with lookup priority
      if (columnTitle.includes('unit price') || columnTitle.includes('מחיר יח')) {
        if (columnId.includes('lookup')) {
          unitPrice = displayValue || textValue || unitPrice;
        } else {
          unitPrice = textValue || displayValue || unitPrice;
        }
      }

      // Handle total price
      if (columnId === 'formula_mksy3sr8' || columnTitle.includes('total') || columnTitle.includes('סה"כ')) {
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
      unitPrice: unitPrice || '0',
      totalPrice: totalPrice || unitPrice || '0'
    };

    // Categorize based on status
    if (status.toLowerCase().includes('recurring') || status.toLowerCase().includes('חוזר')) {
      recurringItems.push(processedItem);
    } else {
      oneTimeItems.push(processedItem);
    }
  });

  return { recurringItems, oneTimeItems };
};

// Main Invoice Component
const Invoice = () => {
  const [mode, setMode] = React.useState("light");
  const [recurringItems, setRecurringItems] = React.useState([]);
  const [oneTimeItems, setOneTimeItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const itemId = searchParams.get("id");

  React.useEffect(() => {
    if (!itemId) {
      setLoading(false);
      return;
    }
    setLoading(true);
    import("./monday").then(({ getSubitemsByItemId }) => {
      getSubitemsByItemId(itemId)
        .then(response => {
          console.log("Monday.com API response:", response);
          const { recurringItems, oneTimeItems } = processApiData(response);
          setRecurringItems(recurringItems);
          setOneTimeItems(oneTimeItems);
        })
        .catch(error => {
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
      <div className="min-h-screen flex items-center justify-center">
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
    <div className={`min-h-screen ${mode === "dark" ? "bg-[#042140]" : "bg-white"}`} dir="rtl">
      <Header mode={mode} setMode={setMode} />
      <div className="px-3 max-w-[1200px] mx-auto">
        <CompanyInfo mode={mode} />
        <hr className="bg-gray-500 h-[0.5px] border-0" />
        <InvoiceHeader mode={mode} />
        {recurringItems.length > 0 && (
          <PricingTable title="תשלום חודשי קבוע" mode={mode} items={recurringItems} showDownload={true} />
        )}
        {oneTimeItems.length > 0 && (
          <PricingTable title="תשלום חד פעמי" mode={mode} items={oneTimeItems} showDownload={false} />
        )}
        <Footer mode={mode} />
      </div>
    </div>
  );
}

export default Invoice;