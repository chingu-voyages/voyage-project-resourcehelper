# voyage-project-techresources
Chingu Voyage Project - Technical Resource Finder

## Table of Contents

* [Overview](#overview)
* [General Instructions](#general-instructions)
* [Requirements & Specifications](#requirements-and-specifications)
* [Acknowledgements](#acknowledgements)
* [About Chingu](#about-chingu)

## Overview

Welcome, Chingus!

Regardless of what role we play in our professional life we need access to information
to help us get better in our role. This includes books, articles, and videos. But, we
are often flooded with too much information, much of which doesn't meet our needs.

In this voyage, your team will design and build a web application, _Resource Helper_, to
help software development professionals like yourself find the information you need to
reach your learning goals.

Your objective is to create a web application users will be able to access and easily
search a wide variety of links to information focused on software development extracted
from the
[#resource-treasures](https://discord.com/channels/330284646283608064/1048165970566467664) 
channel in Chingus Discord community.

In addition, you'll be using the free tier of the
[Google Gemini API](https://ai.google.dev/api?lang=node) to implement an interactive AI
agent into the app to allow users to get help information. This means you will need to add 
_context_ about this app in your API calls. You can find simplified example of how to do
this in the `src` directory of this repo.

Resource Helper will help you build and refine your web development skills. It will also
let you add new skills that will help you build skills and experience using AI.

## General Instructions

This project is designed to be worked on by a team rather than an individual
Chingu. This means you and your team will need to thoroughly read and
understand the requirements and specifications below, **_and_** define and
manage your project following the _Agile Methodology_ defined in the
[Voyage Handbook](https://github.com/chingu-voyages/Handbook/blob/main/docs/guides/voyage/voyage.md#voyage-guide).

As you create this project make sure it meets all of the requirements, but once
it reaches MVP, start implementing the optional features or get creative and
extend it in ways we haven't envisioned. In other words, use the power of
teamwork to make it distinctive and unique.

Remember, UI/UX creativity is yours to explore—design an interface that stands
out while ensuring ease of use.

Also, there is no need to purchase any subscriptions or software for this project. The 
[Gemini Flash 1.5 free tier](https://ai.google.dev/pricing#1_5flash) is sufficent for the
AI part of the project and there are many 
[web hosting services](https://github.com/chingu-voyages/Handbook/blob/main/docs/resources/techresources/appdeployment.md) 
with free tiers you can use to deploy your app.

We have added a sample React app to the `src` directory of this repo you can
use to see how to call the Gemini API.

## Requirements and Specifications

### What You Need to Do

The following define the minimum requirements and ideas for features you should
implement. But, we've also included stretch goals you should use to enhance
your app once you complete these basic requirements.

#### Structure

* [ ] This is a frontend application.
* [ ] You may use any languages, tools, or libraries your team agrees on to design and build this app.
* [ ] You may use AI for research. But, you may **_NOT_** use it to create code for your app.

#### Styling

* [ ] Surprise us!!! Use your team's creativity to make this app distinctive.
* [ ] Add a footer containing a link to your team's GitHub repo.
* [ ] Recommend using this resource for [clean CSS](https://israelmitolu.hashnode.dev/writing-cleaner-css-using-bem-methodology).

#### Functionality

* Application Overview

  * [ ] Develop an application that helps users find technical information.
  * [ ] Ensure the application is user-friendly, accessible, and visually appealing.
  * The landing page contains these components:
    * [ ] A _header_ containing the name of the app and the current date
    * [ ] A _footer_ that links to your GitHub repo and a list of who is on the team.
    * [ ] A _search input form_ to allow the user to select any combination of categories and specify search terms used to select items. Categories and search terms may be used by
    themselves or in combination with one another to filter the results.
    * [ ] A scrollable _search results area_ containing the search results.
    * [ ] A _chat icon_ that will display a popup when clicked to allow the user to ask for
    help from the AI agent you build into the app.

    ![Page Wireframe](./assets/Page_Wireframe.png)

    But, this wireframe doesn't provide many specifics! That's correct! Your
    task is to design your app from the detailed specifications we provide and
    apply your own styling.

* Search input form

  * [ ] The form must include and input field cooresponding to each part of the
  Pentagram methodology.
  * [ ] The user must enter data into all Pentagram fields.
  * [ ] The user must be allowed to update any or Pentagram field between submissions.
  * [ ] Include a reset button for each Pentagram input field to allow it to be cleared
  independently from other form fields.
  * [ ] Include a button to submit the prompt through the Gemini API.
  
* Result

  * [ ] Format the output returned by Gemini so it is readable and displayed as left justified
  paragraphs and lists. Note. Gemini will return these, but a `console.log` of the result text
  will not necessarily be properly formatted. You will need to read the documentation and
  research the returned data to determine how to implement this feature.

* Validation and Error Handling

  * [ ] Display an error message for invalid inputs (e.g. an empty Pentagram input field).
  * [ ] The user must be informed about errors at the time they are detected.
  * [ ] Provide clear error messages when they are corrected.

* User Interface and Experience (UI/UX)

* [ ] In general, you will find these [UI design principles](https://www.justinmind.com/ui-design/principles) helpful.
* [ ] If your team doesn't include a dedicated UI/UX Designer you will [find
these tips](https://github.com/chingu-voyages/Handbook/blob/main/docs/resources/techresources/uiux.md)
helpful.

### Stretch Goals (Not Required)

Once you complete the basic application begin enhancing it with any of the
following optional stretch goals. Make sure that any of these you choose to
implement match the capabilities of your tier and the resources (e.g. time &
knowledge) availble to your team.

* [ ] Since there may be a large number of items returned through the API consider
retrieving the min _pages_ to limit the performance impact of retrieving and displaying
everything.

* [ ] Personalize the application by collecting the user's name and including it
in labels, alerts, and error message.

* [ ] Add functionality export the prompt and result as a PDF or CSV file.

* [ ] Add functionality to allow users to rate and save prompts and their results.

* [ ] Add a dashboard to display metrics including, but not limited to,
the following:
  * Number of prompts created in the current session
  * Number of errors detected in the current session
  * Percentage of errors to successful executions in the current session
  * Average and total number of characters for results in the current session
  * Number of successful and unsuccessful calls to the Gemini API in the
  current session

* [ ] Supplement the dashboard metrics with cooresponding graphs of your choice.

* [ ] If you created a dashboard (see above) and have implmented a backend
application component store all prompts and results in a database and include
lifetime versions of the session metrics.

* [ ] Implement full-stack application that makes the calls to the Gemini API
via a BE route. Frontend and backend are required.

* [ ] Implement a register & login feature.

* [ ] Authenticate users via Google or GitHub OAuth securely.
  * [Github Authentication](https://www.npmjs.com/package/oauth-client-github)
  * [Google Authentication](https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid)
  A detailed guide on how to obtain an API key and perform Google Authentication.

* [ ] Add functionality to print and/or email the results to the user. Check out
[EmailJS](https://www.emailjs.com/docs) for how you might email them.

* [ ] Surprise us with any features you would like to add to this app! Brainstorm
with your teammates to see what you can come up with.

## Acceptance Criteria

* [ ] You should include a good readme in your project repo.
* [ ] Add acceptance criteria to your readme for any stretch goals you choose
to implement.
* [ ] Users can enter data into the input form, submit it, and formatted
results will be displayed.
* [ ] Error messages are displayed at the time an error is detected. These
should be clear and provide advice for how to correct the error
* [ ] The UI provides clear feedback for invalid inputs.
* [ ] The UI should be responsive
* [ ] The results returned from Gemini are displayed in a clear and readable
fashion.

## Acknowledgements

We would like to express our profound gratitude to the global developer
community, whose collaborative spirit and shared knowledge continually
motivate and enrich our endeavors. Together, we achieve extraordinary
milestones. Thank you.

## About Chingu

If you aren't yet a member of Chingu we invite you to [join us](https://chingu.io).
We help ourmembers transform what they've learned in courses & tutorials into the
practical experience employers need and want. The experience that helps to set you
apart from other applicants for the same jobs.
