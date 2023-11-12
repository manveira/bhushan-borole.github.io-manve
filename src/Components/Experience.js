import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";

export default function Experience() {
  const items = [
    {
      date: "September 2022 - Present",
      cardTitle: "Microsoft",
      cardSubtitle: "Software Engineer",
      cardDetailedText: [
        "Developing automated systems that detect security issues and manage workflows across Azure Identity services on a global scale.",
        "Implement privacy-enhancing technologies to ensure compliance with applicable privacy laws and regulations.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
    },
    {
      date: "NOV 2021 - SEPT 2022",
      cardTitle: "System Administrator",
      cardSubtitle: "CAFETO SOFTWARE",
      cardDetailedText: [
        "Collected JSON data by web-scraping, using open API end points and storing it in a RDBMS.",
        ".",
        ".",
        ".",
        ".",
        ".",
        ".",
        ".",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
    },
    {
      date: "JUN 2021 - NOV 2021",
      cardTitle: "Front Integral Technical Support Engineer",
      cardSubtitle: "TLMARK",
      cardDetailedText: [
        "Linux server management from command line (CLI) and remote connection by SSH or Putty configuration and management.",
        "Creation and Bash scripting handling for automation tasks and performances.",
        "Support at enterprise level PYMES, CORPORATE HFC, OPTICAL FIBER, FTTX, MPLS, DTH and WTTH services.",
        "ºBuilding Incidents, Interactions, massive failures, reports, scaling and resolution support cases.",
        "CRM, SERVICE MANAGER and FO DIAGNOSTICATOR apps management.",
        "Support related with LAN, WAN, Firewall, VPNs Forticlient, repeaters, allocation of fixed public IPs, DMZ, port forwarding and HUAWEI MA5675.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
    },
  ];

  return (
    <section id="experience" class="about background-alt">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Experience</h2>
        </div>
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {items.map((data, i) => {
                return (
                  <VerticalTimelineElement
                    key={i}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#343a40" }}
                    date={data.date}
                    dateClassName="timeline-date"
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    iconStyle={{
                      background: "#0563bb",
                      color: "#fff",
                    }}
                    icon={<WorkIcon />}
                  >
                    <h3
                      className="vertical-timeline-element-title"
                      style={{
                        fontSize: "14",
                        color: "rgba(255, 255, 255, 0.8)",
                      }}
                    >
                      {data.cardTitle}
                    </h3>
                    <h4
                      className="vertical-timeline-element-subtitle"
                      style={{
                        fontSize: "1.2em",
                        fontWeight: "350",
                        color: "#7e8890",
                      }}
                    >
                      {data.cardSubtitle}
                    </h4>
                    <p
                      style={{
                        fontSize: "1em",
                        fontWeight: "350",
                        color: "#74808a",
                      }}
                    >
                      {data.cardDetailedText}
                    </p>
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
}
