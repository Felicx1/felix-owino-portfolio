import React, { useState } from "react";
import styled from "styled-components";
import ProjectCard from "../cards/ProjectCard";

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content-center;
  position: relative;
  z-index: 1;
  padding: 0 16px;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.primary + 20};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
  ${({ active, theme }) =>
    active &&
    `
    background:  ${theme.primary + 20};
  `}
`;

const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

const Projects = () => {
  const [toggle, setToggle] = useState("all");

  // ✅ Hard-coded projects
  const myProjects = [
    {
      id: 1,
      title: "Listings & Advertising System (Suuq)",
      date: "Live Project",
      description:
        "A listings & advertising platform for posting, browsing, searching, and managing multi-category listings with rich filters and user workflows.",
      image: "", // optional (leave empty if you don't have an image)
      tags: ["Vue", "Laravel", "REST API", "Listings", "Filters"],
      category: "web app",
      webapp: "https://suuq.clifford.co.ke/",
    },
    {
      id: 2,
      title: "HRM & Payroll SaaS (DoneQuick HRMS)",
      date: "Live Project",
      description:
        "A multi-tenant HRM & payroll SaaS platform covering employee management, payroll runs, reports, and admin controls for organizations.",
      image: "",
      tags: ["Vue", "Laravel", "SaaS", "Multi-tenant", "Payroll"],
      category: "web app",
      webapp: "https://demo.donequicktechnologicalworld.com/",
    },
    {
      id: 3,
      title: "Freighter & Logistics System",
      date: "Live Project",
      description:
        "A freight and logistics portal for managing shipments, operations workflows, and customer logistics processes end-to-end.",
      image: "",
      tags: ["Vue", "Laravel", "Logistics", "Operations", "Dashboards"],
      category: "web app",
      webapp: "https://portal.mflcoms.com",
    },
  ];

  const filtered =
    toggle === "all" ? myProjects : myProjects.filter((p) => p.category === toggle);

  return (
    <Container id="Projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc style={{ marginBottom: "20px" }}>
          Here are some of my key live projects.
        </Desc>

        <ToggleButtonGroup>
          <ToggleButton active={toggle === "all"} onClick={() => setToggle("all")}>
            ALL
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "web app"}
            onClick={() => setToggle("web app")}
          >
            WEB APPS
          </ToggleButton>
        </ToggleButtonGroup>

        <CardContainer>
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
