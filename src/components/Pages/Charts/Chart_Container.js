import { Link } from "react-router-dom";
const Charts_Container = ({ title, data, link, responsive_Class }) => {
  const Details = (route, name) => {
    if (route === "jodi") {
      return `/jodi-chart/${name
        .toLowerCase()
        .replace(/\s+/g, "")}/jodi-chart?`;
    } else if (route === "pana") {
      return `/pana-chart/${name.toLowerCase().replace(/\s+/g, "")}/pana-chart`;
    } else if (route === "starline") {
      return `/starline/${name.toLowerCase().replace(/\s+/g, "")}`;
    } else if (route === "jackpot") {
      return `/andarbahar/${name.toLowerCase().replace(/\s+/g, "")}`;
    }
  };

  return (
    <>
      <div className={responsive_Class}>
        <h3
          className={`charts-main-title text-decoration-underline  ${
            title === "Jodi Chart" ? "color-white" : ""
          }`}
        >
          {title}
        </h3>

        {title === "Starline" || title === "Jackpot" ? (
          <>
            <div className="shadow card rounded border-0 timetable">
              <div className="card-body" style={{ textAlign: "center" }}>
                <h4 className="charts-border-left">
                <Link
                  to={
                    title === "Starline"
                      ? "/starline/allstarline"
                      : "/andarbahar/alljackpot"
                  }
                  className="text-decoration-none primary-color"
                  state={{
                    title:
                      title === "Starline"
                        ? "allstarline"
                        : "alljackpot",
                  }}
                >
                  {/* {data1.providerName.toUpperCase()} */}
                  {title === "Starline"
                    ? "ALL STARLINE CHART"
                    : "ALL JACKPOT CHART"}
                </Link>
              </h4>

              </div>
            </div>
          </>
        ) : (
          ""
        )}

        <div>
          {data &&
            data?.map((data1, index) => (
              <>
                <div className="shadow card rounded border-0 timetable">
                  <div className="card-body" style={{ textAlign: "center" }}>
                    <h4 className="charts-border-left">
                      <Link
                        to={Details(link, data1.providerName)}
                        state={{ title: data1?.providerName, id: data1?._id }}
                        className="text-decoration-none primary-color"
                      >
                        {data1.providerName.toUpperCase()}
                      </Link>
                    </h4>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default Charts_Container;
