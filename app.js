const express = require("express");
const app = express();

var port = process.env.PORT || 8080;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Home
app.get("/", function(req, res) {
  const title = "avojak";
  res.render("pages/index", {
    title: title,
    meta: {
      title: title,
      description: "Homepage for @avojak"
    },
    activeTab: null
  });
});

// About
app.get("/about", function(req, res) {
  const title = "avojak | About";
  res.render("pages/about", {
    title: title,
    meta: {
      title: title,
      description: "About @avojak"
    },
    activeTab: "about"
  });
});

// Resume
app.get("/about/resume", function(req, res) {
  const title = "avojak | Resume";
  res.render("pages/resume", {
    title: title,
    meta: {
      title: title,
      description: "@avojak's online resume"
    },
    activeTab: "about"
  });
});

// Hydrogen project page
app.get("/projects/hydrogen", function(req, res) {
  const title = "avojak | Hydrogen";
  res.render("pages/project", {
    title: title,
    meta: {
      title: title,
      description: "Hydrogen Eclipse plugin"
    },
    activeTab: "projects",
    project: {
      name: "Hydrogen",
      status: "v1.0.1",
      description: "Hydrogen is an Eclipse plugin to configure and launch one or more <a href=\"http://www.h2database.com/html/main.html\">H2</a> database servers. Server instances can be launched directly from the Eclipse toolbar.",
      blogUrl: "https://blog.avojak.com/2019/04/09/hydrogen/",
      githubUrl: "https://github.com/avojak/hydrogen",
      hosting: {
        name: "Eclipse Marketplace",
        icon: "fas fa-box-open",
        url: "https://marketplace.eclipse.org/content/hydrogen"
      }
    }
  });
});

// AWS p2 Maven Plugin project page
app.get("/projects/aws-p2-maven-plugin", function(req, res) {
  const title = "avojak | AWS p2 Maven Plugin";
  res.render("pages/project", {
    title: title,
    meta: {
      title: title,
      description: "AWS p2 Maven Plugin"
    },
    activeTab: "projects",
    project: {
      name: "AWS p2 Maven Plugin",
      status: "v2.0.0", // TODO: Try to get the latest version by using the Nexus Core API (https://oss.sonatype.org/nexus-restlet1x-plugin/default/docs/path__artifact_maven_resolve.html)
      description: "A Maven plugin for deploying a <a href=\"https://www.eclipse.org/equinox/p2/\">p2</a> update site to an <a href=\"https://aws.amazon.com/s3/\">AWS S3</a> bucket.",
      blogUrl: "https://blog.avojak.com/2018/08/10/aws-p2-maven-plugin/",
      githubUrl: "https://github.com/avojak/aws-p2-maven-plugin",
      hosting: {
        name: "Maven Central",
        icon: "fas fa-database",
        url: "http://mvnrepository.com/artifact/com.avojak.mojo/aws-p2-maven-plugin"
      }
    }
  });
});

// p2 Inspector project page
app.get("/projects/p2-inspector", function(req, res) {
  const title = "avojak | p2 Inspector";
  res.render("pages/project", {
    title: title,
    meta: {
      title: title,
      description: "p2 Inspector"
    },
    activeTab: "projects",
    project: {
      name: "p2 Inspector",
      status: "v2.0.0",
      description: "A headless Eclipse plugin which exposes a REST interface for inspecting and retrieving the contents of a remote <a href=\"https://www.eclipse.org/equinox/p2/\">p2</a> repository.",
      blogUrl: "https://blog.avojak.com/2019/03/15/p2-inspector/",
      githubUrl: "https://github.com/avojak/p2-inspector",
      hosting: {
        name: "Docker Hub",
        icon: "fab fa-docker",
        url: "https://hub.docker.com/r/avojak/p2-inspector"
      }
    }
  });
});

// AWS p2 Repository project page
app.get("/projects/aws-p2-repository", function(req, res) {
  const title = "avojak | AWS p2 Repository";
  res.render("pages/project", {
    title: title,
    meta: {
      title: title,
      description: "AWS p2 Repository"
    },
    activeTab: "projects",
    project: {
      name: "AWS p2 Repository",
      status: "v1.0",
      description: "AWS p2 Repository is a web application to host <a href=\"https://www.eclipse.org/equinox/p2/\">p2</a> repositories backed by <a href=\"https://aws.amazon.com/s3/\">AWS S3</a>.",
      blogUrl: "https://blog.avojak.com/2019/03/31/aws-p2-repository/",
      githubUrl: "https://github.com/avojak/aws-p2-repository",
      hosting: {
        name: "Docker Hub",
        icon: "fab fa-docker",
        url: "https://hub.docker.com/r/avojak/aws-p2-repository"
      }
    }
  });
});

// The 404 Route (ALWAYS keep this as the last route)
app.get("*", function(req, res) {
  const title = "Page Not Found";
  res.status(404).render("pages/404", {
    title: title,
    meta: {
      title: title,
      description: title
    }
  });
});

app.listen(port, () => console.log("Server running at http://127.0.0.1:" + port + "/"));
