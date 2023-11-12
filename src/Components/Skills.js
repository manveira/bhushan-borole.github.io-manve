const Skills = () => {

  const skills = [
    "DevOps", "Cloud", "AWS", "Freelance", "Kubernetes", "Terraform", "Linux", 
    "MacOs", "GitHub", "Git", "CI/CD", "Docker", "Circle CI", 
    "Jenkins", "Bash", "GCP", "Python", "Java",
    "GitLab", "Jfrog", "SonarQube", "Jira",
    "Confluence", "ArgoCD", "Ansible",
  ]
  return (
    <section id="skills" class="skills section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Skills</h2>
        </div>
        <div>
          <ul>
              {
                skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))
              }
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;
