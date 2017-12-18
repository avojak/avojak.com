const functions = require('firebase-functions');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('pages/index', {
    activeTab: null
  });
});

app.get('/about', function(req, res) {
  res.render('pages/about', {
    activeTab: "about"
  });
});

app.get('/projects/hydrogen', function(req, res) {
  res.render('pages/project', {
    activeTab: "projects",
    project: {
      name: "Hydrogen",
      status: "In Progress",
      description: "Hydrogen is an Eclipse plugin to configure and launch one or more <a href=\"http://www.h2database.com/html/main.html\">H2</a> database servers. Server instances can be launched directly from the Eclipse Run Configuration menu.",
      githubUrl: "https://github.com/avojak/hydrogen"
    }
  });
});

app.get('/projects/aws-p2-maven-plugin', function(req, res) {
  res.render('pages/project', {
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
