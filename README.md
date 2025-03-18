# Course-Plan-Project
% Options for packages loaded elsewhere
\PassOptionsToPackage{unicode}{hyperref}
\PassOptionsToPackage{hyphens}{url}
%
\documentclass[
]{article}
\usepackage{amsmath,amssymb}
\usepackage{lmodern}
\usepackage{iftex}
\ifPDFTeX
  \usepackage[T1]{fontenc}
  \usepackage[utf8]{inputenc}
  \usepackage{textcomp} % provide euro and other symbols
\else % if luatex or xetex
  \usepackage{unicode-math}
  \defaultfontfeatures{Scale=MatchLowercase}
  \defaultfontfeatures[\rmfamily]{Ligatures=TeX,Scale=1}
\fi
% Use upquote if available, for straight quotes in verbatim environments
\IfFileExists{upquote.sty}{\usepackage{upquote}}{}
\IfFileExists{microtype.sty}{% use microtype if available
  \usepackage[]{microtype}
  \UseMicrotypeSet[protrusion]{basicmath} % disable protrusion for tt fonts
}{}
\makeatletter
\@ifundefined{KOMAClassName}{% if non-KOMA class
  \IfFileExists{parskip.sty}{%
    \usepackage{parskip}
  }{% else
    \setlength{\parindent}{0pt}
    \setlength{\parskip}{6pt plus 2pt minus 1pt}}
}{% if KOMA class
  \KOMAoptions{parskip=half}}
\makeatother
\usepackage{xcolor}
\usepackage{graphicx}
\makeatletter
\def\maxwidth{\ifdim\Gin@nat@width>\linewidth\linewidth\else\Gin@nat@width\fi}
\def\maxheight{\ifdim\Gin@nat@height>\textheight\textheight\else\Gin@nat@height\fi}
\makeatother
% Scale images if necessary, so that they will not overflow the page
% margins by default, and it is still possible to overwrite the defaults
% using explicit options in \includegraphics[width, height, ...]{}
\setkeys{Gin}{width=\maxwidth,height=\maxheight,keepaspectratio}
% Set default figure placement to htbp
\makeatletter
\def\fps@figure{htbp}
\makeatother
\usepackage[normalem]{ulem}
\setlength{\emergencystretch}{3em} % prevent overfull lines
\providecommand{\tightlist}{%
  \setlength{\itemsep}{0pt}\setlength{\parskip}{0pt}}
\setcounter{secnumdepth}{-\maxdimen} % remove section numbering
\ifLuaTeX
  \usepackage{selnolig}  % disable illegal ligatures
\fi
\IfFileExists{bookmark.sty}{\usepackage{bookmark}}{\usepackage{hyperref}}
\IfFileExists{xurl.sty}{\usepackage{xurl}}{} % add URL line breaks if available
\urlstyle{same} % disable monospaced font for URLs
\hypersetup{
  hidelinks,
  pdfcreator={LaTeX via pandoc}}

\author{}
\date{}

\begin{document}

\textbf{Lab 9 Notes}

\textbf{1. Team Number:} 4

\textbf{2. Team Name:} The Advisors

\textbf{Project Name:} Schedules4U

\textbf{3. Team Members:}

Merrick Oleszek

\begin{itemize}
\item
  \begin{quote}
  Github: @Merricko24
  \end{quote}
\item
  \begin{quote}
  Email:
  \href{mailto:meol4367@colorado.edu}{\uline{meol4367@colorado.edu}}
  \end{quote}
\end{itemize}

Xiaobo Gonaver

\begin{itemize}
\item
  \begin{quote}
  Github: @x1aobog
  \end{quote}
\item
  \begin{quote}
  Email:
  \href{mailto:xigo2260@colorado.edu}{\uline{xigo2260@colorado.edu}}
  \end{quote}
\end{itemize}

Adlai Kohn

\begin{itemize}
\item
  \begin{quote}
  Github: @adko9071
  \end{quote}
\item
  \begin{quote}
  Email:
  \href{mailto:adko9071@colorado.edu}{\uline{adko9071@colorado.edu}}
  \end{quote}
\end{itemize}

Calvin Hawks

\begin{itemize}
\item
  \begin{quote}
  Github: @CalvinHawks
  \end{quote}
\item
  \begin{quote}
  Email:
  \href{mailto:caha9859@colorado.edu}{\uline{caha9859@colorado.edu}}
  \end{quote}
\end{itemize}

Jaqueline Serrano

\begin{itemize}
\item
  \begin{quote}
  Github: @Jackie995
  \end{quote}
\item
  \begin{quote}
  Email:
  \href{mailto:jase9895@colorado.edu}{\uline{jase9895@colorado.edu}}
  \end{quote}
\end{itemize}

Coleman Caldwell

\begin{itemize}
\item
  \begin{quote}
  Github: @ccald27
  \end{quote}
\item
  \begin{quote}
  Email:
  \href{mailto:coca9230@colorado.edu}{\uline{coca9230@colorado.edu}}
  \end{quote}
\end{itemize}

\textbf{4. Application Name:} Course Planner

\textbf{5. Application Description:}

We have decided to create an application that helps students efficiently
plan their academic journey by allowing them to create a structured
course roadmap based on their completed and required coursework. Users
will be able to register using their email address to securely login and
access their personalized academic plans. Upon registration, they can
input details about the courses they have already completed, including
course codes, names, and availability.

With this information, the application may be able to generate a
customized semester-by-semester course map in the form of a flowchart to
ensure users can stay on track to graduate on time while meeting all
their degree requirements. To ensure our application is different from
any other scheduling applications, we want to add a feature that
recommends classes to users based on courses they have already
completed, as required when signing up for the website. To do this we
could populate a database with the users data, such as the classes they
have previously taken as selected/collected on the registration page.
Then in the index.js file use a fetch API to get class recommendations
based on the classes previously taken (stored in the database). In an
HTML file show these results on the front end to the user. The feature
would identify and show which courses you could qualify for based on
your prerequisites and offer them to you.

Features:

\begin{itemize}
\item
  \begin{quote}
  Class search
  \end{quote}
\item
  \begin{quote}
  Footer
  \end{quote}
\item
  \begin{quote}
  Semester by semester planning: assuming that all classes offered every
  fall/spring semester are always offered (no deviation)
  \end{quote}
\item
  \begin{quote}
  Suggest future classes based on classes already taken
  \end{quote}
\item
  \begin{quote}
  Login page - email, password (only @colorado.edu)
  \end{quote}
\item
  \begin{quote}
  Logout page - message confirming logout, navigate back to login page
  \end{quote}
\item
  \begin{quote}
  Web crawler to gather data (class data and major requirements)
  \end{quote}
\item
  \begin{quote}
  Registration page - select your major and classes
  you\textquotesingle ve taken
  \end{quote}
\item
  \begin{quote}
  Plan page- horizontal scrolling of all your semesters
  \end{quote}
\item
  \begin{quote}
  Credits for each classes
  \end{quote}
\item
  \begin{quote}
  Class hours and semester availabilities
  \end{quote}
\item
  \begin{quote}
  Class ratings?
  \end{quote}

  \begin{itemize}
  \item
    \begin{quote}
    Ratemyprofessor api? Not public but found some resources we can use
    to make it. Flow-chart side scrolling style course planner
    \end{quote}
  \item
  \end{itemize}
\item
  \begin{quote}
  Can add more semesters as needed
  \end{quote}
\item
  \begin{quote}
  ``Advisor collaboration mode'', lets advisors see and comment on class
  choice/graduation plan while maintaining a degree of separation
  between advisor and student(? As per the premise of the website)
  \end{quote}
\end{itemize}

\textbf{6. Audience:}

Students who need help planning their semester's courses for the near or
distant future, need class recommendations, need to see what they
should/have to take, and see their course plans to the end of college.

\textbf{7. Vision Statement:}

Ensuring students can plan out their degree requirements and stay on
track to graduate.

\textbf{8. Version Control: Repository:
\href{https://github.com/Merricko24/Course-Plan-Project}{\uline{https://github.com/Merricko24/Course-Plan-Project}}}

\textbf{9. Development Methodology:} Use a kanban board to keep track of
user stories. Use agile methodology to track/delegate building the site.
Check in periodically to see how user assigned stories are going

\textbf{10. Communication Plan:} We plan to communicate on a Discord
server named: CSCI 3308 Group Project. We plan to make sub-channels to
discuss and document various parts of the project.

\textbf{11. Meeting Plan:} Friday's at 4:30pm-4:45pm with TA over zoom
and Tuesday's at 12 for group work time in-person.

\textbf{12. Use Case Diagram:}

\textbf{(coleman do this)}

\textbf{13. Wireframes:}

(On paper) Xiaobo and Jaqueline

Registration page - Xiaobo

Login page - Xiaobo/Jaqueline (2 versions)

Logout page - Xiaobo

Flow chart of classes - Jaqueline

\textbf{Wireframes:}\includegraphics[width=6.5in,height=8.38889in]{vertopal_cb7b58d0b79e4310b1ed680c1d53a36a/media/image4.jpg}\includegraphics[width=6.5in,height=8.38889in]{vertopal_cb7b58d0b79e4310b1ed680c1d53a36a/media/image3.jpg}

\includegraphics[width=4.43122in,height=6.10937in]{vertopal_cb7b58d0b79e4310b1ed680c1d53a36a/media/image1.png}\includegraphics[width=4.29133in,height=6.04687in]{vertopal_cb7b58d0b79e4310b1ed680c1d53a36a/media/image2.png}

\textbf{Case Diagram:}

\end{document}