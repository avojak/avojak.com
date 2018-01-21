const functions = require('firebase-functions');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Home
app.get('/', function(req, res) {
  const title = "avojak";
  res.render('pages/index', {
    title: title,
    meta: {
      title: title,
      description: "Homepage for @avojak"
    },
    activeTab: null
  });
});

// About
app.get('/about', function(req, res) {
  const title = "avojak | About";
  res.render('pages/about', {
    title: title,
    meta: {
      title: title,
      description: "About @avojak"
    },
    activeTab: "about"
  });
});

// Hydrogen project page
app.get('/projects/hydrogen', function(req, res) {
  const title = "avojak | Hydrogen";
  res.render('pages/project', {
    title: title,
    meta: {
      title: title,
      description: "Hydrogen Eclipse plugin"
    },
    activeTab: "projects",
    project: {
      name: "Hydrogen",
      status: "In Progress",
      description: "Hydrogen is an Eclipse plugin to configure and launch one or more <a href=\"http://www.h2database.com/html/main.html\">H2</a> database servers. Server instances can be launched directly from the Eclipse Run Configuration menu.",
      githubUrl: "https://github.com/avojak/hydrogen"
    }
  });
});

// AWS p2 Maven Plugin project page
app.get('/projects/aws-p2-maven-plugin', function(req, res) {
  const title = "avojak | Hydrogen";
  res.render('pages/project', {
    title: title,
    meta: {
      title: title,
      description: "AWS p2 Maven Plugin"
    },
    activeTab: "projects",
    project: {
      name: "AWS p2 Maven Plugin",
      status: "In Progress",
      description: "A Maven plugin for deploying a <a href=\"https://www.eclipse.org/equinox/p2/\">p2</a> update site to an <a href=\"https://aws.amazon.com/s3/\">AWS S3</a> bucket.",
      githubUrl: "https://github.com/avojak/aws-p2-maven-plugin"
    }
  });
});

exports.app = functions.https.onRequest(app);
