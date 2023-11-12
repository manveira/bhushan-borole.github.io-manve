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
      cardTitle: "DevOps Engineer",
      cardSubtitle: "LULOBANK",
      cardDetailedText: [
        "Management and use AWS's Cloud provider services range such as EC2, Lambda, S3, Apigateway, DynamoDB, RDS, Cloudwatch, IAM, ECS, EKS, Eventbridge, SQS, ASG, Batch, cognito, glue job, ECR, Elasticache, Systems Manager, secrets Manager, KMS, Step function, SNS, Security groups, Transit gateway, VPC, Subnet, Keycloak, ELB, NLB.",
        "Creation, deployment and modularization whole bank's infrastructure using Terraform.",
        "Micro-services and enterprise apps containerization using Docker.",
        "Orchestration dozens of containers using Kubernetes clusters.",
        "Setting up CI/CD different workflows and repositories using Circle CI.",
        "Management version control and repositories using Git and Github.",
        "Creation and running scripts using bash scripting.",
        "Usage, installation, environment configuration and dependency handling for MacOS and Linux operating system based environments.",
        "Control, core and review artifacts code using Jfrog.",
        "Setup and code quality analysis using SonarQube.",
        "Planning, documentation, ticket management and collaborative teamwork using Atlassian, Jira and Confluence toolsets.",
        "Coding and building functional software using Python and Java.",
        "Troubleshooting, analysis and debugging within different software lifecycle stages.",
        "Cross-team collaboration providing support for Technical Leaders, Developers, TAEs and other ones bank collaborators.",
        "Migration from ECS micro-services to AWS Kubernetes (EKS).",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
    },
    {
      date: "NOV 2021 - SEPT 2022",
      cardTitle: "System Administrator",
      cardSubtitle: "CAFETO SOFTWARE",
      cardDetailedText: [
        "Cloud computing such as Amazon Web Services (AWS) and Google Cloud Platform (GCP).",
        "Version control such as GIT, GitHub and GitLab.",
        "Containerization using Docker.",
        "CI/CD automation servers such as Circle CI and Jenkins.",
        "Cost-based reporting on enterprise software.",
        "Help desk incident management and troubleshooting.",
        "Licensing, permissions and registration of company users.",
        "Management and centralization users's digital biometrics.",
        "Contact with providers to execution business projects.",
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
