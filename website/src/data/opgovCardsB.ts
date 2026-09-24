/**
 * Operational Governance Knowledge Flashcards — cards 11–19.
 * See opgovFlashcards.ts for the series documentation.
 *
 * Section order per card: the template's five boxes in template order
 * (What is it / When is it useful / How to use it / Common pitfalls /
 * References and resources), with the slide's main open-area content as
 * its own section placed right after "How to use it".
 */
import {
  OpGovCard,
  WHAT,
  WHEN,
  HOW,
  PITFALLS,
  REFS,
  THIAGO,
  ALE,
  VERONICA,
} from './opgovShared';

export const cardsB: Record<string, OpGovCard> = {
  'google-apps-script': {
    number: 11,
    title: 'Google Apps Script',
    originalDate: 'July 2021',
    bylines: [THIAGO],
    sections: [
      {
        heading: WHAT,
        blocks: [
          {
            kind: 'quote',
            text: 'A rapid application development platform that makes it fast and easy to create business applications that integrate with G Suite.',
            source: 'Google',
          },
          {
            kind: 'p',
            text: 'A scripting framework for lightweight application development in the Google platform, written in JavaScript.',
          },
        ],
      },
      {
        heading: WHEN,
        blocks: [
          {
            kind: 'p',
            text: 'Google Drive offers great features for storing and working with different types of files, but it lacks some features that are crucial for your work. Google Apps Script is an easy-to-use scripting language to get things done that are otherwise not available in Drive.',
          },
          {
            kind: 'p',
            text: 'It interacts with other Google services, including AdSense, Analytics, Calendar, Drive, Gmail, and Maps.',
          },
        ],
      },
      {
        heading: HOW,
        blocks: [
          {
            kind: 'p',
            text: 'You write code in JavaScript. To create and run a script:',
          },
          {
            kind: 'list',
            ordered: true,
            items: [
              'Create or open a Google Doc or Sheet. From the Tools menu, select Script editor.',
              'Remove the existing code and add your own. Go to File → Save, add a script name, click OK.',
              'To execute, click ►, or select a function from the Run menu. On first run it will ask for your authentication — check the required permissions and click Allow.',
              'A yellow bar appears at the centre-top to indicate that the script is running.',
            ],
          },
        ],
      },
      {
        heading: PITFALLS,
        blocks: [
          {
            kind: 'list',
            items: [
              'If you are new to JavaScript, it can feel like a limitation — and a reason to give up. Never do it; don’t let this be a deterrent.',
              'Processing limitations: as a cloud-based service, Apps Script limits the time a user’s script may run, and limits access to Google services.',
            ],
          },
        ],
      },
      {
        heading: REFS,
        blocks: [
          {
            kind: 'list',
            items: [
              '[19 useful Google Apps Scripts to automate Google Drive](https://www.hongkiat.com/blog/google-drive-google-apps-scripts/)',
              '[Google Apps Script — Wikipedia](https://en.wikipedia.org/wiki/Google_Apps_Script)',
              '[Google Apps Script — Google developers](https://developers.google.com/apps-script/)',
              '[Learn JavaScript — full course for beginners](https://www.youtube.com/watch?v=PkZNo7MFNFg)',
              '[JavaScript course (in Portuguese)](https://www.youtube.com/watch?v=skQmZdAQpaI&list=PLlMH0iwc_TF9VAn2EOAjY29xagFYO2cBy)',
              '[Example: a script running in a Google Sheet](https://docs.google.com/spreadsheets/d/173HEjSbMBFEdATQZBn7ioxsULUbLAHD5kZ3B4ClTWwI/edit#gid=1393405163)',
            ],
          },
        ],
      },
    ],
  },

  'iso-9001': {
    number: 12,
    title: 'ISO 9001',
    originalDate: 'July 2021',
    bylines: [ALE, VERONICA],
    sections: [
      {
        heading: WHAT,
        blocks: [
          {
            kind: 'p',
            text: 'ISO 9001 is a **standard** (“normativa”) for certifying quality management systems that conform to a required set of principles. It belongs to the ISO 9000 family of standards.',
          },
          {
            kind: 'p',
            text: 'The latest version, ISO 9001:2015, emphasizes **risk management** as opposed to risk avoidance.',
          },
        ],
      },
      {
        heading: WHEN,
        blocks: [
          {
            kind: 'list',
            items: [
              'When you want to transmit **trust** to someone — that’s what standards are for.',
              'When you want to display the world’s most widespread (1M+ companies) quality stamp.',
              'When you need a generic and broad framework in which to document and measure a company’s processes.',
            ],
          },
        ],
      },
      {
        heading: HOW,
        blocks: [
          {
            kind: 'list',
            ordered: true,
            items: [
              'A specialist oversees the creation of a documented body describing the company’s processes pertaining to quality of service management and delivery (flowcharts, inputs/outputs).',
              'Each of these processes must comply with the Standard.',
              'Each process must be regularly measured for performance, in a way that is documented and demonstrable.',
              'A third party (i.e. not the ISO) audits your processes and certifies your company complies with ISO 9001:2015.',
            ],
          },
        ],
      },
      {
        heading: 'What the certification asks you to show',
        blocks: [
          {
            kind: 'list',
            items: [
              'PDCA + risk management',
              'Stakeholders, business model',
              'Evidence of commitment',
              'SWOT and PREN',
              'Targets (OKRs are more than fine)',
              '“Processes” KPIs',
              'Process sheets (“fichas de procesos”) — e.g. onboarding, customer service, procurement…',
            ],
          },
        ],
      },
      {
        heading: PITFALLS,
        blocks: [
          {
            kind: 'list',
            items: [
              'An “ISO façade” to get the certification, not really representative of how the company works.',
              'Thinking that being certified means you’re perfect. No — this is usually a bare minimum.',
              'Thinking that ISO will tell you how to do things. It doesn’t: it is a generic set of principles that can be met in many ways.',
            ],
          },
        ],
      },
      {
        heading: REFS,
        blocks: [
          {
            kind: 'list',
            items: [
              '[ISO 9001:2015 — official standard requirements](https://www.iso.org/obp/ui/#iso:std:iso:9001:ed-5:v1:en)',
              '[ISO 9001 — quality management](https://www.iso.org/iso-9001-quality-management.html)',
            ],
          },
        ],
      },
    ],
  },

  'lean-six-sigma': {
    number: 13,
    title: 'Lean + Six Sigma',
    originalDate: 'July 2021',
    bylines: [ALE],
    sections: [
      {
        heading: WHAT,
        blocks: [
          {
            kind: 'p',
            text: 'A combination of two famous frameworks to: **eliminate WASTE** (Lean) and **eliminate ERRORS** (Six Sigma).',
          },
          {
            kind: 'p',
            text: 'Lean is a set of techniques and principles to focus on value creation with minimal waste (remove unnecessary steps, resources, etc.). Six Sigma is a set of techniques to guarantee consistent output quality (total errors < 6σ — six “standard deviations” from the mean).',
          },
        ],
      },
      {
        heading: WHEN,
        blocks: [
          {
            kind: 'list',
            items: [
              'When you need to improve processes in order to cut costs or improve quality consistently.',
              'When you need to professionalize process execution to make it more resilient to organizational changes.',
            ],
          },
        ],
      },
      {
        heading: HOW,
        blocks: [
          {
            kind: 'list',
            ordered: true,
            items: [
              'Carefully select which processes will get the Lean Six Sigma treatment, and which will not.',
              'Carefully select what to implement from a battery of well-known tools and best practices, according to your needs. Train the personnel to use them (or hire expert “black belt” consultants) and start using them.',
              'Have change management elements in place, because there will be organizational inertia against the changes.',
            ],
          },
        ],
      },
      {
        heading: 'The two toolboxes',
        blocks: [
          {
            kind: 'sub',
            heading: 'Six Sigma',
            blocks: [
              {
                kind: 'p',
                text: '**Concepts:** sigma = standard deviation = σ = dispersion from the mean. Achieving 6σ implies that 99.99966% of process outcomes are error-free.',
              },
              {
                kind: 'p',
                text: '**Methodologies:** DMAIC (Define, Measure, Analyze, Improve, Control) and DMADV.',
              },
              {
                kind: 'p',
                text: '**Tools commonly associated with Six Sigma (and Lean):**',
              },
              {
                kind: 'list',
                items: [
                  '[Define] SIPOC analysis — Suppliers, Inputs, Process, Outputs, Customers',
                  '[Define] CTQ tree — “critical to quality” (voice of customer VOC → CTQs)',
                  '[Define/Measure] Business process mapping / check sheet',
                  '[Measure σ] Control chart / control plan (a swimlane map) / run charts',
                  '[Analyze] Root cause analysis',
                  '[Analyze] Cause-and-effect diagram (fishbone or Ishikawa)',
                  '[Analyze] 5 Whys — ask “Why?” five times',
                  '[Analyze] Histograms / Pareto chart — 80% of effects come from 20% of causes',
                  '[Control] Design of experiments / stratification',
                  'Statistical and fitting tools: analysis of variance, general linear model, ANOVA Gauge R&R, regression analysis, correlation, scatter diagram, chi-squared test',
                  'Axiomatic design',
                  'Cost–benefit analysis',
                  'PICK chart, process capability, rolled throughput yield',
                  'Quality Function Deployment (QFD)',
                  'Quantitative marketing research through Enterprise Feedback Management (EFM) systems',
                  'COPIS analysis — the customer-centric perspective of SIPOC',
                  'Taguchi methods / Taguchi loss function',
                ],
              },
            ],
          },
          {
            kind: 'sub',
            heading: 'Lean',
            blocks: [
              {
                kind: 'p',
                text: '**Concepts:** Muda = waste = 7 (+1): defects, overproduction, waiting, transportation, inventory, motion, over-processing — plus non-utilized talent.',
              },
              {
                kind: 'p',
                text: '**Tools commonly associated with Lean (and Six Sigma):**',
              },
              {
                kind: 'list',
                items: [
                  'Kaizen — a paradigm of continual improvement: “Plan → Do → Check → Act” (also known as the Shewhart cycle, Deming cycle, or PDCA)',
                  'Value stream process mapping — document, analyze, and improve the flow of information or materials that produce a product or service',
                  '5S — a workplace organization method to standardize identification, storage, use, and maintenance (seiri, seiton, seisō, seiketsu, shitsuke — sort, set in order, shine, standardize, sustain)',
                  'Kanban — a demand-driven scheduling system that limits inventory buildup through “cards” that signal the need for more inventory',
                  'Gemba — walk the production floor and see directly',
                  'Poka-yoke — error proofing (originally baka-yoke, “idiot-proofing”)',
                  'Productive maintenance',
                  'Set-up time reduction',
                  'Reduce lot sizes',
                  'Line balancing',
                  'Schedule leveling',
                  'Standardized work',
                  'Visual management — put key information visible to everyone',
                  'Value stream mapping — a map or flowchart of what adds value to an outcome',
                ],
              },
            ],
          },
        ],
      },
      {
        heading: PITFALLS,
        blocks: [
          {
            kind: 'list',
            items: [
              'Expecting results from a mediocre implementation (using only some tools, sometimes, but not rigorously nor consistently).',
              'Not knowing how to translate these best practices from the last century (manufacturing-oriented and tangible) to the current, more service-oriented and intangible business environment.',
              'Thinking these are project management tools in general — use them for process management projects.',
            ],
          },
          {
            kind: 'note',
            text: 'The original slide closed on this trap with a *Dilbert* strip: a manager announces he\'ll "fuse Six Sigma with Lean methods to eliminate the gap between strategy and objectives" — and settles for calling it "waste of time." Scott Adams, [dilbert.com](https://dilbert.com), January 2007. Not reproduced here for copyright reasons.',
          },
        ],
      },
      {
        heading: REFS,
        blocks: [
          {
            kind: 'list',
            items: [
              '[Muda — the seven forms of waste, Wikipedia](https://en.wikipedia.org/wiki/Muda_(Japanese_term)#The_seven_forms_of_waste)',
              '[Kaizen](https://www.kaizen.com/what-is-kaizen.html)',
              '[Value stream mapping — Wikipedia](https://en.wikipedia.org/wiki/Value-stream_mapping)',
              '[5S — Wikipedia](https://en.wikipedia.org/wiki/5S_(methodology))',
              '[Kanban — Wikipedia](https://en.wikipedia.org/wiki/Kanban)',
              '[Gemba — Wikipedia](https://en.wikipedia.org/wiki/Gemba)',
              '[Poka-yoke — Wikipedia](https://en.wikipedia.org/wiki/Poka-yoke)',
              '[Visual management — AllAboutLean](https://www.allaboutlean.com/visual-management/)',
              '[List of Six Sigma certification organizations — Wikipedia](https://en.wikipedia.org/wiki/List_of_Six_Sigma_certification_organizations)',
              '[Standard deviation — Wikipedia](https://en.wikipedia.org/wiki/Standard_deviation)',
              '[SIPOC — What is Six Sigma](https://www.whatissixsigma.net/sipoc/)',
              '[CTQ tree — What is Six Sigma](https://www.whatissixsigma.net/ctq-tree/)',
              '[Control chart — Wikipedia](https://en.wikipedia.org/wiki/Control_chart)',
              '[Ishikawa diagram — Investopedia](https://www.investopedia.com/terms/i/ishikawa-diagram.asp)',
              '[Pareto chart in Excel — Excel Easy](https://www.excel-easy.com/examples/pareto-chart.html)',
            ],
          },
        ],
      },
    ],
  },

  okr: {
    number: 14,
    title: 'OKRs — Objectives and Key Results',
    originalDate: 'March 2023',
    bylines: [ALE],
    sections: [
      {
        heading: WHAT,
        blocks: [
          {
            kind: 'p',
            text: 'A paradigm for setting and tracking goals across an organization in a way that makes them:',
          },
          {
            kind: 'list',
            items: [
              '**Focused** — committed to priorities',
              '**Aligned** — connected across teams',
              '**Trackable** — for proper accountability',
              '**Stretched** — to “dare” to meet amazing challenges',
            ],
          },
        ],
      },
      {
        heading: WHEN,
        blocks: [
          {
            kind: 'p',
            text: 'When you want to strike a balance between (1) making sure that everyone’s efforts are aligned — and hence reinforce each other — while at the same time (2) allowing enough flexibility for people’s intrinsic motivation to be the driver of the strategy execution.',
          },
        ],
      },
      {
        heading: HOW,
        blocks: [
          {
            kind: 'list',
            items: [
              'The “Os” can be more fun and exciting, but the “KRs” must be easily measurable and time-bound.',
              'It is different from other goal-setting frameworks in that it is set ~50% bottom-up, not in a waterfall manner — you could say it’s market dynamics for goal setting.',
              'It is mostly decoupled from compensation. Otherwise, there can be no true stretch.',
            ],
          },
        ],
      },
      {
        heading: 'Checklist for a good OKR',
        blocks: [
          {
            kind: 'list',
            items: [
              'Is the Objective memorable?',
              'Are the KRs focused on outcomes?',
              'Do the KRs pose challenging trade-offs?',
              'Is it really what matters the most?',
            ],
          },
          {
            kind: 'sub',
            heading: 'Example',
            blocks: [
              {
                kind: 'quote',
                text: 'Successfully migrate the platform',
                source: 'Objective',
              },
              {
                kind: 'list',
                items: [
                  'Reduce infrastructure costs from X to Y',
                  'Maintain availability during migration at 99.99%',
                  'Maintain revenue of €€',
                ],
              },
            ],
          },
        ],
      },
      {
        heading: PITFALLS,
        blocks: [
          {
            kind: 'list',
            items: [
              'It is NOT a to-do list: KRs focus on **outcomes**, not tasks.',
              'It is NOT a project or process management methodology.',
              'It is NOT an employee evaluation tool (just one more input). It is a **leadership paradigm** for communication, empowerment, ownership, and driving outcomes.',
              'KRs do not exist in isolation, but in the context of trade-offs against the other KRs within the same Objective.',
              'The other teams you depend on must be on board with your KRs.',
            ],
          },
        ],
      },
      {
        heading: REFS,
        blocks: [
          {
            kind: 'list',
            items: [
              '[Measure What Matters — John Doerr](https://www.whatmatters.com/resources)',
              '[John Doerr’s TED talk](https://www.ted.com/talks/john_doerr_why_the_secret_to_success_is_setting_the_right_goals)',
              '[John Doerr on OKRs — MIT Sloan interview](https://sloanreview.mit.edu/video/john-doerr-on-okrs-and-measuring-what-matters/)',
              '[Google re:work — goal setting with OKRs](https://rework.withgoogle.com/guides/set-goals-with-okrs/steps/introduction/)',
              '[Google re:work — introduction to OKRs](https://rework.withgoogle.com/print/guides/6229207193485312/)',
              '[Felipe Castro — OKR tools and tips](https://felipecastro.com/en/okr-tools/)',
              '[Atlassian’s OKR guide and templates](https://www.atlassian.com/team-playbook/plays/okrs)',
              '[OKR example for Uber — Medium](https://medium.com/startup-tools/okrs-5afdc298bc28)',
              '[Betterworks — OKR resources](https://www.betterworks.com/okrs/)',
              '[How Google sets OKRs — video](https://www.youtube.com/watch?v=mJB83EZtAjc)',
            ],
          },
        ],
      },
    ],
  },

  pdca: {
    number: 15,
    title: 'PDCA (Plan-Do-Check-Act)',
    originalDate: 'July 2021',
    bylines: [ALE],
    sections: [
      {
        heading: WHAT,
        blocks: [
          {
            kind: 'p',
            text: 'A schematic illustration to convey the principle of **improving things through measurement** — the circular shape conveying the notion of **continual improvement**.',
          },
          {
            kind: 'p',
            text: 'It is the best-known version of several similar ideas that evolved during the XX century. PDCA has influenced many business frameworks and standards, including Lean, ISO 9001, and Agile.',
          },
        ],
      },
      {
        heading: WHEN,
        blocks: [
          {
            kind: 'list',
            items: [
              'When you need a very simple way of asking for — or explaining the idea of — measurement-based improvement.',
              'When you want to model a simple cycle of pilot testing and ensuing implementation.',
            ],
          },
        ],
      },
      {
        heading: HOW,
        blocks: [
          {
            kind: 'p',
            text: 'Clearly define what each letter really implies for your team or company — it is a common source of confusion, and there is no real “down to earth” consistency in the available literature.',
          },
          {
            kind: 'p',
            text: 'Then categorize the steps or milestones of your initiative under each of the labels of the acronym.',
          },
        ],
      },
      {
        heading: 'The PDCA cycle',
        blocks: [
          {
            kind: 'stages',
            loop: true,
            loopLabel: 'continual improvement',
            steps: [
              { label: 'Plan', text: 'Document a sequence of steps expected to achieve a specific goal.' },
              { label: 'Do', text: 'Take the steps in accordance with the plan.' },
              { label: 'Check', text: 'Analyze the performance and outcomes to identify adjustments.' },
              { label: 'Act', text: 'Continue executing — this time including the adjustments.' },
            ],
          },
        ],
      },
      {
        heading: 'PDCA, applied three ways',
        blocks: [
          {
            kind: 'sub',
            heading: 'PDCA applied to a finite initiative',
            blocks: [
              {
                kind: 'list',
                items: [
                  '**Plan:** document a sequence of steps to be taken with the expectation of achieving a specific goal.',
                  '**Do:** take the steps in accordance with the plan (perform, or execute, the plan).',
                  '**Check:** analyze the performance and outcomes of the Do phase to identify adjustments needed to improve the current execution.',
                  '**Act:** continue executing the plan — but this time including the adjustments recommended in the Check phase.',
                ],
              },
            ],
          },
          {
            kind: 'sub',
            heading: 'PDCA applied to an iterative process',
            blocks: [
              {
                kind: 'list',
                items: [
                  '**Plan:** document the sequence of steps that constitute the process.',
                  '**Do:** take the steps in accordance with the plan (execute the process).',
                  '**Check:** analyze process performance to identify adjustments necessary to improve the current execution.',
                  '**Act:** continue executing the process, including the adjustments from the Check phase.',
                  '**Plan again:** re-engineer the process by documenting a new and improved sequence of steps, derived from the lessons learned in the previous run. Do; Check; Act; and around.',
                ],
              },
            ],
          },
          {
            kind: 'sub',
            heading: 'PDCA applied to a pilot-conditioned implementation',
            blocks: [
              {
                kind: 'list',
                items: [
                  '**Plan:** document a sequence of steps expected to achieve a specific goal, and the threshold of acceptability for the result of a test.',
                  '**Do:** perform a test in a limited scope, but representative enough to validate the hypotheses to a degree of reliability.',
                  '**Check:** analyze the test’s outcome to determine viability at scale.',
                  '**Act:** permanently implement the planned initiative if viability was deemed acceptable in the Check phase.',
                ],
              },
            ],
          },
        ],
      },
      {
        heading: PITFALLS,
        blocks: [
          {
            kind: 'list',
            items: [
              'It is NOT a methodology or detailed framework. It is an aid for communicating certain notions — don’t try to use it to fully model a very complex system.',
              '“Do” and “Act” are very similar words. Make sure everyone understands the difference.',
              '“Do” and “Act” should not include analyses and reviews. They are about action.',
            ],
          },
        ],
      },
      {
        heading: REFS,
        blocks: [
          {
            kind: 'note',
            text: 'Warning from the original card: the publicly available literature is very superficial and inconsistent, especially when it comes to implementing this as a useful tool.',
          },
          {
            kind: 'list',
            items: [
              '[PDCA as a test/implementation approach — MindTools](https://www.mindtools.com/pages/article/newPPM_89.htm)',
              '[Exploring the disadvantages of PDCA — Bright Hub PM](https://www.brighthubpm.com/methods-strategies/75929-exploring-the-disadvantages-of-pdca-methodologies/)',
              '[The history of PDCA (Deming circle, Shewhart cycle…) — AllAboutLean](https://www.allaboutlean.com/pdca-history/)',
              '[“Do” is actually doing — AllAboutLean](https://www.allaboutlean.com/pdca/)',
              '[“Do” and “Act” as action stages — HEFLO](https://www.heflo.com/blog/pdca/what-is-the-pdca-cycle/)',
            ],
          },
        ],
      },
    ],
  },

  'project-management': {
    number: 16,
    title: 'Project Management',
    originalDate: 'July 2021',
    bylines: [ALE, VERONICA],
    sections: [
      {
        heading: WHAT,
        blocks: [
          {
            kind: 'p',
            text: 'A **project** is a set of tasks that are **structured** to achieve a **measurable goal** in a **defined deadline**.',
          },
          {
            kind: 'p',
            text: '**Project management** is the use of frameworks to make critical resource-allocation decisions during the course of a project. Its goal is to ensure a timely and optimal outcome quality despite the inevitable uncertainty and resource limitations.',
          },
        ],
      },
      {
        heading: WHEN,
        blocks: [
          {
            kind: 'list',
            items: [
              'When multiple stakeholders and responsibility roles are involved, so accountability would otherwise be diluted.',
              'When multiple interdependent tasks will be performed simultaneously.',
              'When time of delivery is critical.',
              'When the use of resources (cost) is high.',
              'When outcome quality is critical.',
            ],
          },
        ],
      },
      {
        heading: HOW,
        blocks: [
          {
            kind: 'list',
            items: [
              'During execution, the project team must rely on the Project Plan to **prioritize the inevitable hard choices** when changing tasks, dates, resources, and investments.',
              'A significant amount of time must be dedicated to the Planning Phase (rule of thumb: **30%**).',
              'All Project Team members must understand the documentation, to be fully committed to their roles.',
              'These decisions must be recorded and compared against the plan, in order to **learn** and **communicate** to stakeholders.',
            ],
          },
        ],
      },
      {
        heading: 'The Project Deck',
        blocks: [
          {
            kind: 'p',
            text: 'A comprehensive document that tells the entire “story” of the project:',
          },
          {
            kind: 'stages',
            steps: [
              { label: 'Inputs & reference docs', text: 'A current problem, a customer request, the business driver — plus handbooks, studies, AS-IS processes, current plans.' },
              { label: 'The Project Deck', text: 'Planning (phase I) → Execution (phase II) → Closure (phase III), linked by a hub indexing every input, output, and reference.' },
              { label: 'Outputs', text: 'New process flowcharts, a system go-live, a fleet deployment, outcome results…' },
            ],
          },
          {
            kind: 'list',
            items: [
              '**Planning (phase I):** the Project Charter, the WBS, the RACI matrix, and the Gantt.',
              '**Execution (phase II):** a record of the managerial decisions taken during execution.',
              '**Closure (phase III):** a final account of execution vs plan, to derive lessons learned.',
              '**Hub:** a linked index of every input, output, and reference document.',
            ],
          },
          {
            kind: 'p',
            text: 'This is what the entire project documentation should look like:',
          },
          {
            kind: 'list',
            items: [
              '**Inputs:** a current problem, a request from a customer, the business driver of the project.',
              '**Reference docs:** handbooks, studies, AS-IS processes, current plans, etc.',
              '**Outputs:** e.g. new process flowcharts, a new system go-live, a new fleet deployment, outcome results…',
            ],
          },
        ],
      },
      {
        heading: PITFALLS,
        blocks: [
          {
            kind: 'list',
            items: [
              'Confusing “project” (has an END) with “process” (is cyclical).',
              'Not having a unique Project Manager.',
              'Not clearly stating who is accountable for EVERY task.',
              'Not setting clear deadlines and milestones.',
              'Not updating the project’s documentation during the execution phase, in order to compare against the planning baseline.',
              'Not updating all the relevant stakeholders on time, to adequately manage everyone’s expectations.',
            ],
          },
        ],
      },
      {
        heading: REFS,
        blocks: [
          {
            kind: 'list',
            items: [
              '[PMBOK — the Project Management Institute](https://www.pmi.org/)',
            ],
          },
          {
            kind: 'note',
            text: 'The original card cross-references sibling flashcards for the Project Charter, WBS, RACI, and Gantt.',
          },
        ],
      },
    ],
  },

  'strategy-vs-tactics': {
    number: 17,
    title: 'Strategy vs. Tactics',
    originalDate: 'August 2023',
    bylines: [ALE],
    sections: [
      {
        heading: WHAT,
        blocks: [
          {
            kind: 'p',
            text: 'The key word here is **choice**: you choose a course of action while sacrificing other possible alternatives.',
          },
          {
            kind: 'p',
            text: 'While **tactics** is about facing specific circumstances, **strategy** is a reflection of the set of choices that underlie every action (the underlying thread). Strategy is more abstract and overarching; tactics are more specific, and usually circumscribed within a strategy.',
          },
        ],
      },
      {
        heading: WHEN,
        blocks: [
          {
            kind: 'p',
            text: 'Not very often anymore, as the terms are spent from overuse and misuse.',
          },
          {
            kind: 'p',
            text: 'Strategic and tactical thinking are useful for making **coherent decisions** across a set of diverse but related problems. This coherence is key to strengthening your competitive position against adversaries — and therefore increasing your odds of winning, in games, business, war, or persuasion.',
          },
        ],
      },
      {
        heading: HOW,
        blocks: [
          {
            kind: 'list',
            items: [
              'Know what your strategy is: distill the commonalities that reflect your priorities and your calculated bets.',
              'When making a decision, ask yourself: “is this decision coherent with my overall strategy?”',
              'Learn to realize when you’re in a tactical situation (a specific, but complex, circumstance with a range of choices to make).',
              'Only deploy tactics that are coherent with — and do not undermine — the strategy to which they are circumscribed.',
            ],
          },
        ],
      },
      {
        heading: 'Worked examples from the card',
        blocks: [
          {
            kind: 'sub',
            heading: 'The 2018 World Cup',
            blocks: [
              {
                kind: 'list',
                items: [
                  '**Strategy:** Lopetegui and Hierro’s strategy was to rely on the player Costa to increase the number of games won, because they thought it was their main competitive strength. Spoiler alert: it didn’t work.',
                  '**Tactics:** if the score is favorable [circumstance] and the rival defence advances, keep Costa and another scorer in the offside line for counterattacks, and prioritize passes to Costa.',
                  '**Implied sacrifices:** lost opportunities to profit from other potential star players.',
                ],
              },
            ],
          },
          {
            kind: 'sub',
            heading: 'Apple vs. Android (Google)',
            blocks: [
              {
                kind: 'list',
                items: [
                  '**Apple — strategy:** aspirational, high price point, outsourced but integrated supply chain. **Tactics:** a discount on new devices if you recycle your old one. **Implied sacrifices:** market share.',
                  '**Android — strategy:** aim for quantity, every price range, a window to Google services. **Tactics:** one year of Google Play Movies free with the purchase of a Motorola One. **Implied sacrifices:** consistent quality.',
                ],
              },
            ],
          },
          {
            kind: 'sub',
            heading: 'Military',
            blocks: [
              {
                kind: 'list',
                items: [
                  '**Strategy:** leverage diplomacy (geopolitics) with key allies to maintain the technological edge and financing sources.',
                  '**Tactics:** “if it didn’t rain recently [circumstance], burn the field so the enemy cannot camp there” — or “approach the battlefield from the upper ground, fast, before the rival does”.',
                  '**Implied sacrifices:** diplomacy implies compromises; speed implies depletion of resources.',
                ],
              },
            ],
          },
        ],
      },
      {
        heading: PITFALLS,
        blocks: [
          {
            kind: 'list',
            items: [
              'Thinking “year = strategy; month = tactics”, “country = strategy; city = tactics”, “boss = strategy; worker = tactics”. No.',
              'Misleading by implying that strategy = more important and tactics = less important; misusing the terms as euphemisms.',
              'A strategy is NOT necessarily the sum of several tactics.',
              'Confusing these terms with a wishlist, to-dos, or a plan.',
              'Bear in mind both terms were synonyms historically.',
              'Relying on tactics that in the long term might detract from your strategy.',
            ],
          },
        ],
      },
      {
        heading: REFS,
        blocks: [
          {
            kind: 'quote',
            text: 'The essence of strategy is choosing what not to do.',
            source: 'Michael Porter, On Competition (1998)',
          },
          {
            kind: 'list',
            items: [
              '[Why a strategy is not a plan — The Economist reviews “Strategy: A History”](https://www.economist.com/books-and-arts/2013/11/02/why-a-strategy-is-not-a-plan)',
              '[What is Strategy — Michael Porter, HBR](https://hbr.org/1996/11/what-is-strategy)',
              '[Tracking Strategies — Henry Mintzberg](https://books.google.es/books?id=YlG7IcDwzc8C&redir_esc=y)',
              '[The Prince — Machiavelli (historically relevant, but take with a grain of salt)](https://www.victoria.ac.nz/lals/about/staff/publications/paul-nation/Prince-Adapted2.pdf)',
              '[The Art of War — Sun Tzu (historically relevant, but take with a grain of salt)](http://classics.mit.edu/Tzu/artwar.html)',
              '[Napoleon’s tactics (historically relevant, war-oriented)](http://www.napolun.com/mirror/web2.airmail.net/napoleon/Napoleon_tactics.htm#napoleonstrategy)',
            ],
          },
        ],
      },
    ],
  },

  swot: {
    number: 18,
    title: 'SWOT',
    originalDate: 'November 2022',
    sections: [
      {
        heading: WHAT,
        blocks: [
          {
            kind: 'p',
            text: 'SWOT (or **DAFO** in Spanish) is a tool that lets the entrepreneur know the situation of their company, brand, or product in order to make future decisions. It identifies **S**trengths, **W**eaknesses, **O**pportunities, and **T**hreats — the variables that help the company meet its objectives and determine which obstacles must be overcome or minimized to achieve the desired results.',
          },
        ],
      },
      {
        heading: WHEN,
        blocks: [
          {
            kind: 'p',
            text: 'It must be done at the company’s constitution, together with the business plan, to take advantage of every strength the company has. But there are other moments to prepare a SWOT — for example when launching a new product or service.',
          },
          {
            kind: 'p',
            text: 'In summary, the reasons to do a SWOT are: work organization, capital organization, market observation, environment analysis, and the creation of strategies.',
          },
        ],
      },
      {
        heading: HOW,
        blocks: [
          {
            kind: 'p',
            text: 'The SWOT is divided into an **internal analysis** (detecting the strengths and weaknesses of the company that give rise to advantages or disadvantages) and an **external analysis** (identifying the threats and opportunities of your market).',
          },
          {
            kind: 'p',
            text: 'For example:',
          },
          {
            kind: 'list',
            items: [
              '**Strengths:** skills and technological resources, cost advantages, good image among consumers.',
              '**Weaknesses:** no clear key strategy, lower than average profitability, excess of internal problems.',
              '**Threats:** entry of new competitors, slow market growth, changes in the needs and tastes of consumers.',
              '**Opportunities:** entering new markets or segments, diversification of related products, rapid market growth.',
            ],
          },
        ],
      },
      {
        heading: 'The four quadrants',
        blocks: [
          {
            kind: 'quadrant',
            rowLabels: ['Internal origin', 'External origin'],
            cells: [
              {
                heading: 'Weaknesses',
                items: [
                  'Bad communication between departments',
                  'Little flexibility in planning',
                  'Bad reputation',
                  'Low adaptation to change in technologies',
                ],
              },
              {
                heading: 'Strengths',
                items: [
                  'Market leadership',
                  'Good geographic location',
                  'Motivated workers',
                  'Business vision',
                  'Quality in the products',
                  'Quick adaptation to new customer needs',
                ],
              },
              {
                heading: 'Threats',
                items: [
                  'Increase in competition',
                  'Difficulties getting new sources of investment',
                  'Adverse changes in the trade policies of the country or other countries',
                  'Economic recession',
                ],
              },
              {
                heading: 'Opportunities',
                items: [
                  'Entry into new business lines',
                  'New technologies',
                  'Bet on the training of workers',
                  'Rapid market growth',
                ],
              },
            ],
          },
        ],
      },
      {
        heading: PITFALLS,
        blocks: [
          {
            kind: 'list',
            items: [
              '**Too many strengths and few weaknesses:** it is easier to identify the good things than the negative ones.',
              '**Generic strengths:** it is common to write very general strengths, but they add little value — your competition can have them too. Look for strengths that are unique or differentiated.',
              '**Threats described as weaknesses, or strengths as opportunities (and vice versa):** e.g. “entry of new competitors” is a threat described as a weakness.',
            ],
          },
        ],
      },
      {
        heading: REFS,
        blocks: [
          {
            kind: 'list',
            items: [
              'Book: *Management: A Global Perspective* — Heinz Weihrich, creator of the famous four-quadrant matrix (and of the TOWS matrix)',
              '[Emprendedores — how to do a DAFO (in Spanish)](https://www.emprendedores.es/gestion/a30069/como-hacer-un-dafo2/)',
              '[Cómo usar FODA — Merca2.0](https://www.merca20.com/como-usar-el-analisis-foda/)',
              '[FODA-DAFO](https://foda-dafo.com/)',
            ],
          },
        ],
      },
    ],
  },

  tableau: {
    number: 19,
    title: 'Tableau Software',
    originalDate: 'July 2021',
    bylines: [THIAGO],
    sections: [
      {
        heading: WHAT,
        blocks: [
          {
            kind: 'p',
            text: 'Tableau Software is interactive data visualization software: it **helps people see and understand data**.',
          },
          {
            kind: 'quote',
            text: 'In 2020 the world will generate 50 times the amount of data as in 2011, and 75 times the number of information sources. Within these data are huge opportunities for human advancement. But to turn opportunities into reality, people need the power of data at their fingertips. Tableau delivers exactly that.',
            source: 'IDC, 2011',
          },
        ],
      },
      {
        heading: WHEN,
        blocks: [
          {
            kind: 'list',
            items: [
              'It allows you to code and customize reports.',
              'It allows you to create visual dashboards.',
              'It puts the use and analysis of data within reach of all employees, easily and quickly.',
              'Sophisticated visualizations, reports, and dashboards with an intuitive interface that shows changes the moment they happen.',
              'It allows you to use many data sources in your analysis.',
            ],
          },
        ],
      },
      {
        heading: HOW,
        blocks: [
          {
            kind: 'list',
            ordered: true,
            items: [
              'Connect to a data source.',
              'Add the filters needed for your analysis (time range, region, client type, platform, etc.).',
              'Use the existing dimensions and measures in columns, rows, or marks to create your workbook.',
              'If necessary, create calculated fields, or connect to another data source by blending.',
              'The “Show me” button (right side of the screen) lets you select the display of the data you want.',
              'Save and publish your workbook for everyone to access.',
            ],
          },
        ],
      },
      {
        heading: PITFALLS,
        blocks: [
          {
            kind: 'p',
            text: 'Don’t be afraid to make a mistake: it is necessary to practice, practice, and practice to actually learn — it is the best form. It is not enough to just learn the theory.',
          },
        ],
      },
      {
        heading: REFS,
        blocks: [
          {
            kind: 'list',
            items: [
              '[Tableau Learning — free and complete training lessons](https://www.tableau.com/learn/training)',
              '[Tableau Public — dashboards on current topics: sport, politics, education, health, music…](https://public.tableau.com/en-us/s/gallery)',
              '[Tableau Solutions — how Tableau helps the companies that use it](https://www.tableau.com/solutions)',
            ],
          },
        ],
      },
    ],
  },
};
