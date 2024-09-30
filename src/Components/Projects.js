import Chip from "@material-ui/core/Chip";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useState } from "react";
import CodeIcon from "@material-ui/icons/Code";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";

const Projects = () => {
  const items = [
    {
      cardTitle: "Using CloudFormation to create a CDN, Apigateway, Lambda, IAM Roles, S3 and Dynamo DB",
      cardDetailedText: [
        "AWS Project using diagram architecture",
        "This project has 3 Apigateway endpoints (GET, POST, GET) exposed to consume a Dynamo table and files within S3",        
        "Main idea was to have a website hosted in an S3 Bucket being consumed through a CloudFront",
        "The infrastructure was provisioned using Cloudformation",
        "Endpoints were consumed using Postman as well",
        "Evidences, images, replication's scenarios and scripts were documented in the README file"
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["CloudFormation", "AWS", "Lambda", "Python", "Bash", "CloudFront", "Apigateway", "S3", "DynamoDB", "IAM",],
      links: [
        {
          url: "https://github.com/manveira/AWS_Project",
          text: "View Source Code",
        },
      ],
    },
    {
      cardTitle: "Deploy Jenkins on EC2 AWS",
      cardDetailedText: [
        "Project to deploy CI/CD server Jenkins",
        "Main idea was to have a CI/CD server on a remote instance to automate workflows to build applications and software.",
        "The infrastructure was provisioned using Terraform",
        "The instance EC2 was based in Linux",
        "Finally the communication to the EC2 was by SSH to install Jenkins and other dependencies",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["Jenkins", "AWS", "EC2", "Terraform", "Linux"],
      links: [
        {
          url: "https://github.com/manveira/project1_deploy_jenkins_ec2",
          text: "View Source Code",
        },
      ],
    },    
    {
      cardTitle: "Web app using Nginx",
      cardDetailedText: [
        "Project to build an app using Nginx",
        "Main idea was to expose a local application through a web server such as Nginx to receive traffic and be consumed by users.",
        "The infrastructure was provisioned using Terraform"
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["Nginx", "Web app", "Terraform"],
      links: [
        {
          url: "https://github.com/manveira/project2_web_app_using_nginx",
          text: "View Source Code",
        },
      ],
    },
    {
      cardTitle: "Platzi Scripts",
      cardDetailedText: [
        "Project to automate tasks and dependencies",
        "Installation, administration and set up about environments for workloads.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["NodeJs", "Ngrok", "Tests"],
      links: [
        {
          url: "https://github.com/manveira/platzi-scripts",
          text: "View Source Code",
        },
      ],
    },
  ];

  const [limit, setLimit] = useState(3);
  const [loadButton, setLoadButton] = useState(true);
  const [lessButton, setLessButton] = useState(false);

  const loadMore = () => {
    setLimit(6);
    setLoadButton(false);
    setLessButton(true);
  };

  const loadLess = () => {
    setLimit(3);
    setLoadButton(true);
    setLessButton(false);
  };

  const addButton = () => (
    <Fab color="primary" color="blue" aria-label="add">
      <AddIcon />
    </Fab>
  );

  return (
    <section id="projects" class="about background-alt">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Projects</h2>
        </div>
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {items.slice(0, limit).map((data, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: "#343a40" }}
                  dateClassName="timeline-date"
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  icon={<CodeIcon />}
                  iconStyle={{
                    background: "#0563bb",
                    color: "#fff",
                  }}
                >
                  <div className="projects-technologies">
                    {data.technologies.map((name, i) => (
                      <Chip key={i} label={name}></Chip>
                    ))}
                  </div>
                  <h3
                    className="vertical-timeline-element-title"
                    style={{
                      fontSize: "12",
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    {data.cardTitle}
                  </h3>
                  <p
                    style={{
                      fontSize: "1em",
                      fontWeight: "350",
                      color: "#74808a",
                    }}
                  >
                    {data.cardDetailedText}
                  </p>
                  <div className="project-links">
                    {data.links.map((link, j) => (
                      <div>
                        <br></br>
                        <Button
                          key={j} // eslint-disable-line react/no-array-index-key
                          variant="contained"
                          color="default"
                          target="_blank"
                          href={link.url}
                        >
                          {link.text}
                        </Button>
                      </div>
                    ))}
                  </div>
                </VerticalTimelineElement>
              ))}
              {loadButton && (
                <VerticalTimelineElement
                  iconOnClick={loadMore}
                  iconClassName="d-flex justify-content-center"
                  icon={
                    <IconButton aria-label="add">
                      <AddIcon
                        style={{
                          color: "#fff",
                          marginTop: "0.1px",
                        }}
                      />
                    </IconButton>
                  }
                  iconStyle={{
                    background: "#0563bb",
                    color: "#fff",
                  }}
                />
              )}
              {lessButton && (
                <VerticalTimelineElement
                  iconOnClick={loadLess}
                  iconClassName="d-flex justify-content-center"
                  icon={
                    <IconButton aria-label="add">
                      <RemoveIcon
                        style={{
                          color: "#fff",
                          marginTop: "0.1px",
                        }}
                      />
                    </IconButton>
                  }
                  iconStyle={{
                    background: "#0563bb",
                    color: "#fff",
                  }}
                />
              )}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
