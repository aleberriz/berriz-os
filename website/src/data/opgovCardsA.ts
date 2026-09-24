/**
 * Operational Governance Knowledge Flashcards — cards 01–10.
 * See opgovFlashcards.ts for the series documentation.
 *
 * Section order per card: the template's five boxes in template order
 * (What is it / When is it useful / How to use it / Common pitfalls /
 * References and resources), with the slide's main open-area content as
 * its own section placed right after "How to use it".
 */
import { OpGovCard, WHAT, WHEN, HOW, PITFALLS, REFS, JAIME, FER, ALE } from './opgovShared';

export const cardsA: Record<string, OpGovCard> = {
  agile: {
    number: 1,
    title: 'Agile',
    originalDate: 'July 2021',
    bylines: [JAIME],
    sections: [
      {
        heading: WHAT,
        blocks: [
          {
            kind: 'quote',
            text: 'It’s a management methodology based on collaborative effort of self-organizing and cross-functional teams and their customers.',
          },
          {
            kind: 'p',
            text: 'It advocates adaptive planning, evolutionary development, early delivery, and continual improvement — and it encourages rapid and flexible response to change.',
          },
          {
            kind: 'quote',
            text: 'It’s a hype word that the IT industry uses to describe an alternative method of project management.',
            source: 'The same card, being honest about both',
          },
        ],
      },
      {
        heading: WHEN,
        blocks: [
          {
            kind: 'p',
            text: 'Agile management reduces the common risks associated with the delivery, scope, and budget of a project.',
          },
          {
            kind: 'p',
            text: 'It encourages collaboration between the customer and the team, offering mutual benefits in the mitigation of the high risks during the development of the software.',
          },
        ],
      },
      {
        heading: HOW,
        blocks: [
          {
            kind: 'p',
            text: 'Learn the Agile methodologies on [Agile in a Nutshell](https://www.agilenutshell.com/).',
          },
        ],
      },
      {
        heading: 'The sprint, in one pass',
        blocks: [
          {
            kind: 'sub',
            heading: 'Sprint planning',
            blocks: [
              {
                kind: 'p',
                text: 'At the beginning of a sprint: discuss and agree the scope of work, and select product backlog items that can be completed in one sprint (the **sprint backlog**). 4 hours for a 2-week sprint, split in 2 parts.',
              },
            ],
          },
          {
            kind: 'sub',
            heading: 'Daily scrum',
            blocks: [
              {
                kind: 'p',
                text: 'All members of the development team come prepared. Starts precisely on time, at the same time and place every day. Limited to fifteen minutes. Three questions: What did I complete? What do I plan to complete? Do I see any impediment?',
              },
            ],
          },
          {
            kind: 'sub',
            heading: 'Sprint review',
            blocks: [
              {
                kind: 'p',
                text: 'Reviews the work that was completed and not completed. Presents the completed work to the stakeholders (demo) and plans together what to work on next. 2 hours for a 2-week sprint.',
              },
            ],
          },
          {
            kind: 'sub',
            heading: 'Sprint retrospective',
            blocks: [
              {
                kind: 'p',
                text: 'Reflects on the past sprint, identifies and agrees on continuous process improvement actions. Three questions: What went well? What did not go well? What could be improved? 1.5 hours for a 2-week sprint.',
              },
            ],
          },
          {
            kind: 'note',
            text: 'The product backlog is the ordered list of work to be done — features, bug fixes, non-functional requirements, user stories, etc. The sprint backlog is the subset selected for the next sprint, broken down into tasks.',
          },
        ],
      },
      {
        heading: 'The companion card: Scrum',
        blocks: [
          {
            kind: 'quote',
            text: 'Scrum is a simple framework for effective team collaboration on complex software projects.',
            source: 'The deck’s second slide',
          },
          {
            kind: 'quote',
            text: 'Scrum follows the values and principles of agile, but includes further definitions and specifications.',
          },
          {
            kind: 'quote',
            text: 'With an emphasis on software development, it is designed for teams of 3–9 members who break their work into actions that can be completed within timeboxed iterations, called sprints.',
          },
          {
            kind: 'sub',
            heading: 'Scrum works when',
            blocks: [
              {
                kind: 'list',
                items: [
                  'Requirements change frequently, even from month to month.',
                  'Work requires constant invention, so all steps are not known in advance, and estimates are not expected to be reliable.',
                  'The process is cyclic — it repeats every sprint.',
                  'No steps involve long lead times or lots of specialized resources.',
                ],
              },
            ],
          },
          {
            kind: 'sub',
            heading: 'Scrum works less when',
            blocks: [
              {
                kind: 'list',
                items: [
                  'Team members are geographically dispersed or part-time.',
                  'Team members have very specialized skills.',
                  'Products have many external dependencies.',
                  'Products are mature or legacy, or with regulated quality control.',
                ],
              },
              {
                kind: 'note',
                text: 'Scrum is not a methodology — the deck insists on this.',
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
              'It has been used to create sweatshops, with intolerably long working hours.',
              'Some firms use Agile as a way to downsize and reduce headcount.',
              'Scaling Agile as the fashion, rather than descaling complex problems into manageable pieces of work.',
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
              '[Agile in a Nutshell](https://www.agilenutshell.com/)',
              '[Common agile software development pitfalls — Wikipedia](https://en.wikipedia.org/wiki/Agile_software_development)',
              '“For Agile, It’s The Best And Worst Of Times” — Forbes',
            ],
          },
        ],
      },
    ],
  },

  'awesome-meetings': {
    number: 2,
    title: 'How to have “awesome” meetings',
    originalDate: 'November 2023',
    sections: [
      {
        heading: WHAT,
        blocks: [
          {
            kind: 'p',
            text: 'A meeting is **productive** when its members fulfill their **roles**. The card assigns five:',
          },
          {
            kind: 'sub',
            heading: 'The Organizer',
            blocks: [
              {
                kind: 'p',
                text: '**Duty:** ensures the meeting fulfills its intended purpose. **To-do:** defines the meeting purpose and expected outcome, the agenda, and participants’ roles; drives the discussion. **Tools:** Google Calendar, Zoom, an agenda template.',
              },
            ],
          },
          {
            kind: 'sub',
            heading: 'The Process Facilitator',
            blocks: [
              {
                kind: 'p',
                text: '**Duty:** ensures the meeting is carried out comprehensively. **To-do:** drives the meeting to include all participants’ inputs and ensures output quality; sets up the presentation and the call links. **Tools:** consensus mechanisms, input templates, prioritization techniques.',
              },
            ],
          },
          {
            kind: 'sub',
            heading: 'The Timekeeper',
            blocks: [
              {
                kind: 'p',
                text: '**Duty:** ensures the meeting starts and finishes on time. **To-do:** allocates time slots to each agenda item, keeps track of time, and announces when each change is due. **Tools:** a timer.',
              },
            ],
          },
          {
            kind: 'sub',
            heading: 'The Recorder',
            blocks: [
              {
                kind: 'p',
                text: '**Duty:** ensures the meeting output is properly documented. **To-do:** listens to the conversation and distills the agreements and commitments into written minutes that everyone must agree on. **Tools:** a notepad, email.',
              },
            ],
          },
          {
            kind: 'sub',
            heading: 'Relevant Participants',
            blocks: [
              {
                kind: 'p',
                text: '**Duty:** contribute according to their expected role (decision-maker, consulted, informed, idea generator). **To-do:** adhere to the facilitator’s and timekeeper’s methods; be constructive when contributing ideas; be concise. **Tools:** a notepad, value-adding inputs.',
              },
            ],
          },
        ],
      },
      {
        heading: WHEN,
        blocks: [
          {
            kind: 'p',
            text: 'Have a meeting **to make decisions that need alignment**, to properly communicate impactful decisions, or to ask for help through a comprehensive discussion.',
          },
          {
            kind: 'p',
            text: 'A meeting is **not** necessary when an email or a Slack message (or two…) is enough; when there is no clear output to be documented; or when members don’t know the inputs they contribute.',
          },
        ],
      },
      {
        heading: HOW,
        blocks: [
          {
            kind: 'p',
            text: 'Meeting Rulz!',
          },
          {
            kind: 'list',
            ordered: true,
            items: [
              'Never have a meeting without the call link and the place (a room if necessary) set in Google Calendar.',
              'Always clarify the intended outcome, the agenda, and each member’s role at the start of the meeting.',
              'Everyone must prepare the content they will take to the meeting beforehand.',
              'Do not allow meetings to overlap in your calendar.',
              'If there are too few members, one of them can hold more than one role. But the roles have to be explicitly assigned.',
            ],
          },
        ],
      },
    ],
  },

  'blue-ocean-strategy': {
    number: 3,
    title: 'Blue Ocean Strategy',
    originalDate: 'July 2021',
    bylines: [JAIME],
    sections: [
      {
        heading: WHAT,
        blocks: [
          {
            kind: 'p',
            text: '**Red oceans** are all the industries in existence today — the known market space. **Blue oceans** are all the industries not in existence today — the unknown market space.',
          },
          {
            kind: 'p',
            text: 'Blue ocean strategy is the simultaneous pursuit of **differentiation and low cost** to open up a new market space and create new demand. A blue ocean is an analogy for the wider, deeper potential to be found in unexplored market space.',
          },
        ],
      },
      {
        heading: WHEN,
        blocks: [
          {
            kind: 'p',
            text: 'Helps you rethink your business and understand new options and strategic actions not previously raised. It guides companies toward new markets where there is less competition and more profitability.',
          },
          {
            kind: 'p',
            text: 'This does not necessarily imply the creation of visionary products or new technologies — but the ideal combination of differentiated solutions, fair prices, and attractive features.',
          },
        ],
      },
      {
        heading: HOW,
        blocks: [
          {
            kind: 'sub',
            heading: '1) Create a strategy canvas',
            blocks: [
              {
                kind: 'p',
                text: 'It is designed to give you an immediate snapshot of how your business, product, or service stacks up against the competition:',
              },
              {
                kind: 'list',
                ordered: true,
                items: [
                  'List the products (or services) you want to compare.',
                  'List the attributes, or factors of competition.',
                  'Rate each product according to each attribute.',
                  'Do a simple graph: value attributes on the horizontal axis, then trace the curve of the company and each of its competitors.',
                ],
              },
            ],
          },
          {
            kind: 'sub',
            heading: '2) Raise, reduce, eliminate, create',
            blocks: [
              {
                kind: 'p',
                text: 'The pathway to successful innovation lies in a unique combination of one to four moves on the attributes of your product: **raise**, **reduce**, **eliminate**, and **create**.',
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
              'The cognitive barrier',
              'The resource limitation barrier',
              'The motivation barrier',
              'The organizational policy barrier',
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
              '[Cirque du Soleil — real case (in Portuguese)](https://www.agendor.com.br/blog/estrategia-do-oceano-azul/)',
              '[The Blue Ocean Strategy summary, with 3 examples](https://www.clearpointstrategy.com/blue-ocean-strategy/)',
              '[Step by step — the Blue Ocean Strategy canvas](https://www.ignitionframework.com/blue-ocean-strategy/)',
              '[The Blue Ocean Strategy official site](https://www.blueoceanstrategy.com/)',
              '[Blue ocean moves — examples from big companies](https://www.blueoceanstrategy.com/bos-moves/)',
            ],
          },
        ],
      },
    ],
  },

  'box-plot-charts': {
    number: 4,
    title: 'Box Plot Charts',
    originalDate: 'July 2021',
    bylines: [JAIME],
    sections: [
      {
        heading: WHAT,
        blocks: [
          {
            kind: 'p',
            text: 'Boxplots are a standardized way of displaying the distribution of data based on a **five number summary**: “minimum”, first quartile (Q1), median, third quartile (Q3), and “maximum”.',
          },
          {
            kind: 'p',
            text: 'They give a good graphical image of the concentration of the data and also show how far the extreme values are from most of it.',
          },
        ],
      },
      {
        heading: WHEN,
        blocks: [
          {
            kind: 'p',
            text: 'When indicating whether a distribution is skewed and whether there are potential unusual observations (**outliers**) in the data set.',
          },
          {
            kind: 'p',
            text: 'When large numbers of observations are involved, and when two or more data sets are being compared — the centre, spread, and overall range are immediately apparent.',
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
              'Using the equal interval scale, draw a rectangular box with one end at Q1 and the other end at Q3.',
              'Draw a vertical segment at the median value.',
              'Draw two horizontal segments on each side of the box, one down to the minimum value and one up to the maximum value. These are the “whiskers”.',
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
              'Missing data when ordering the data; using the mean instead of the median; and similar slips.',
              'Summarizing means losing information: you can no longer see the underlying distribution of dots in each group, or their number of observations.',
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
              '[Khan Academy — box and whisker plot exercises](https://www.khanacademy.org/math/ap-statistics/summarizing-quantitative-data-ap/stats-box-whisker-plots/v/box-and-whisker-plot-exercise-example)',
              '[How to make box plots in Tableau](https://help.tableau.com/current/pro/desktop/en-gb/buildexamples_boxplot.htm)',
            ],
          },
        ],
      },
    ],
  },

  coding: {
    number: 5,
    title: 'Coding',
    originalDate: 'July 2021',
    bylines: [ALE],
    sections: [
      {
        heading: WHAT,
        blocks: [
          {
            kind: 'p',
            text: 'A method for instructing computers — systems that automatically carry out sequences of arithmetic or logical operations — to perform specific tasks. When we code, we are creating a **program** (a set of instructions) for the computer to interpret and execute.',
          },
          {
            kind: 'p',
            text: 'Most computers consist of at least a processing unit (to perform arithmetic and logical steps) and some form of memory to store data.',
          },
        ],
      },
      {
        heading: WHEN,
        blocks: [
          {
            kind: 'p',
            text: 'For everything from sleeping better to achieving world peace. It is an **engineering tool**: a way to use the principles of science to solve practical problems.',
          },
          {
            kind: 'p',
            text: 'When we need a computer to perform tasks or solve a problem, relieving us humans from the grind of burdensome tasks in a fraction of the time.',
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
              'Pick an appropriate programming language for the problem (usually Python).',
              'Incorporate all the useful pre-programmed tools you can find from the community.',
              'Write your additional code in such a way that the computer can interpret what you want it to perform.',
              'Test the code for bugs.',
              'Let your software be free and roam the world.',
            ],
          },
        ],
      },
      {
        heading: 'The learning path on the card',
        blocks: [
          {
            kind: 'list',
            items: [
              'Prepare your coding environment',
              'The console vs the text editor',
              'Use functions',
              'Use conditionals',
              'Use loops',
              'Want more? Objects, classes, inheritance…',
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
              'Don’t let the choice of a language prevent you from learning. Just pick one and start coding. Don’t worry if you ever need to learn a different one: the “new” learning curve will be trivial.',
              'Rely heavily on the community in forums, code repositories, etc. Do not reinvent the wheel — reuse good code that is already available out there.',
              'If the program is not doing what you want, then you are wrongly telling the computer to do something else. It’s not the computer’s fault.',
            ],
          },
        ],
      },
      {
        heading: REFS,
        blocks: [
          {
            kind: 'list',
            items: ['The best YouTube Python tutorial I could find for total beginners'],
          },
        ],
      },
    ],
  },

  'coveys-7-habits': {
    number: 6,
    title: 'The 7 Habits of Highly Effective People',
    originalDate: 'July 2021',
    bylines: [JAIME],
    sections: [
      {
        heading: WHAT,
        blocks: [
          {
            kind: 'p',
            text: 'A business and self-help book written by Stephen Covey. It has sold more than 25 million copies, and it was the first non-fiction audio-book to sell more than one million.',
          },
          {
            kind: 'p',
            text: 'An approach to being effective in attaining goals by aligning oneself to what Covey calls **“true north”**: the character ethic vs the personality ethic, and the maturity continuum — dependence, independence, and interdependence.',
          },
        ],
      },
      {
        heading: WHEN,
        blocks: [
          {
            kind: 'list',
            items: [
              'Time management',
              'Developing a mission, vision, and values within your organization',
              'Bringing great positive alterations in your life',
              'Emotional intelligence and self-awareness',
              'Career development',
              'Project management',
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
              'Taking control of your life',
              'Making not just better decisions but smarter, strategic ones',
              'Managing and improving your relationships with family and friends',
              'Overcoming bad habits',
              'Boosting your productivity',
              'Finding a healthy work/life balance',
              'Being your happiest self',
            ],
          },
        ],
      },
      {
        heading: 'The seven habits',
        blocks: [
          {
            kind: 'sub',
            heading: 'Habit 1: Be proactive',
            blocks: [
              {
                kind: 'p',
                text: '*“I am not a product of my circumstances. I am a product of my decisions.”* Between stimulus and response is your greatest power — your freedom to choose your response. Circle of Influence vs Circle of Concern. *“Live and be driven by the principles you value most, not by agendas and forces surrounding you.”* It’s all right to say no when necessary, and then focus on your highest priorities. See also: the Eisenhower Matrix.',
              },
            ],
          },
          {
            kind: 'sub',
            heading: 'Habit 2: Begin with the end in mind',
            blocks: [
              {
                kind: 'p',
                text: '*“Your most important work is always ahead of you, never behind you.”* Begin each day, task, or project with a clear vision of your desired direction. The mission statement; the “center” of our lives.',
              },
            ],
          },
          {
            kind: 'sub',
            heading: 'Habit 3: Put first things first',
            blocks: [
              {
                kind: 'p',
                text: 'Prioritize the important over the merely urgent, and let the plan — not the inbox — drive the day. This is where the Eisenhower Matrix from Habit 1 becomes a scheduling practice.',
              },
            ],
          },
          {
            kind: 'sub',
            heading: 'Habit 4: Think win-win',
            blocks: [
              {
                kind: 'p',
                text: '*“In the long run, if it isn’t a win for both of us, we both lose.”* It is not about being nice (a quick-fix technique) — it is a character-based code for human interaction and collaboration. Zero-sum game vs abundance mentality.',
              },
            ],
          },
          {
            kind: 'sub',
            heading: 'Habit 5: Seek first to understand, then to be understood',
            blocks: [
              {
                kind: 'p',
                text: '*“Most people do not listen with the intent to understand; they listen with the intent to reply.”* Use empathetic listening to genuinely understand a person — this creates an atmosphere of caring and positive problem-solving. Then present your ideas clearly, in the context of a deep understanding of the other person’s needs and concerns.',
              },
            ],
          },
          {
            kind: 'sub',
            heading: 'Habit 6: Synergize',
            blocks: [
              {
                kind: 'p',
                text: '*“Synergy is better than my way or your way. It’s our way.”* Combine the strengths of people through positive teamwork, so as to achieve goals no one could have achieved alone.',
              },
            ],
          },
          {
            kind: 'sub',
            heading: 'Habit 7: Sharpen the saw',
            blocks: [
              {
                kind: 'p',
                text: '*“Renewal is the principle — and the process — that empowers us to move on an upward spiral of growth and change, of continuous improvement.”* Balance and renew your resources, energy, and health — physical, social/emotional, mental, and spiritual — to create a sustainable, long-term, effective lifestyle, so you can continue practicing the other six habits. Kaizen.',
              },
            ],
          },
          {
            kind: 'note',
            text: 'Habits 1–3 are the self-mastery (independence) step of the maturity continuum; habits 4–6 are the interdependence step — working with others; habit 7 sustains the other six.',
          },
        ],
      },
      {
        heading: PITFALLS,
        blocks: [
          {
            kind: 'list',
            items: [
              'The seven habits are not a formula we can just apply and be “better”. It’s essential to master personal change before we can enjoy success outside of ourselves and with others.',
              '“The seven habits are essentially a secular distillation of Mormon teaching.”',
              'Enter a sect.',
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
              '[7 Habits of Highly Effective People in the real world](https://fireuptoday.com/7-habits-of-highly-effective-people/)',
              '[I transformed myself into a fact finder](https://www.linkedin.com/pulse/20131119000023-15454--the-7-habits-of-highly-effective-people-i-transformed-myself-into-a-fact-finder/)',
              '[“Recovery from Mormonism” discussion forum](https://www.exmormon.org/phorum/read.php?2,102840)',
              '[FranklinCovey on Habit 3 — the Eisenhower Matrix](https://www.franklincovey.com/the-7-habits/habit-3.html)',
              '[Habits of Highly Effective People — summary](https://blog.hubspot.com/sales/habits-of-highly-effective-people-summary)',
              '[Kaizen — Wikipedia](https://en.wikipedia.org/wiki/Kaizen)',
            ],
          },
        ],
      },
    ],
  },

  'customer-centric': {
    number: 7,
    title: 'What does Customer Centric mean?',
    originalDate: 'July 2021',
    bylines: [FER],
    sections: [
      {
        heading: WHAT,
        blocks: [
          {
            kind: 'p',
            text: 'Customer centric is a business practice of centralizing corporate strategy on the customer and their needs — a strategy based on putting the customer first of all.',
          },
          {
            kind: 'p',
            text: 'It is not only offering great service to them, but enabling a great experience across all three phases related to customer service: **pre-transaction**, **transaction**, and **post-transaction**.',
          },
        ],
      },
      {
        heading: WHEN,
        blocks: [
          {
            kind: 'p',
            text: 'Companies have to satisfy their customers — so customer centricity must always be present throughout the company.',
          },
        ],
      },
      {
        heading: HOW,
        blocks: [
          {
            kind: 'list',
            items: [
              'Customer-oriented leadership.',
              'Understand the customer profile and needs based on information and data collected.',
              'Empower the team to make decisions and solve customer problems.',
              'Define indicators to measure the efficiency of the service provided.',
              'Use customer feedback for continuous improvement of the service and of the products or services you offer.',
            ],
          },
        ],
      },
      {
        heading: PITFALLS,
        blocks: [
          {
            kind: 'p',
            text: 'Customer centric should not be understood as a concept, but a mission that needs to be embraced throughout the organization.',
          },
          {
            kind: 'quote',
            text: 'Don’t find customers for your products, find products for your customers.',
            source: 'Seth Godin',
          },
          {
            kind: 'quote',
            text: 'You’ve got to start with the customer experience and work backwards for the technology… not start with “let’s sit down with the engineers and figure out what awesome technology we have”.',
            source: 'Steve Jobs',
          },
        ],
      },
      {
        heading: REFS,
        blocks: [
          {
            kind: 'list',
            items: [
              '[How to create a customer centric strategy for your business](https://www.superoffice.com/blog/how-to-create-a-customer-centric-strategy/)',
              '[Customer centric experience](https://www.salesforce.com/blog/2019/01/how-to-create-a-customer-centric-experience.html)',
              '[Become a customer-centric business in 7 steps](https://fitsmallbusiness.com/customer-centric-business/)',
            ],
          },
        ],
      },
    ],
  },

  'design-thinking': {
    number: 8,
    title: 'Design Thinking',
    originalDate: 'May 2019',
    bylines: [FER],
    sections: [
      {
        heading: WHAT,
        blocks: [
          {
            kind: 'quote',
            text: 'Design thinking is a non-linear, iterative (repetition of a process) process which seeks to understand users, challenge assumptions, redefine problems and create innovative solutions to prototype and test.',
            source: 'Interaction Design Foundation',
          },
          {
            kind: 'quote',
            text: 'A human-centered approach to innovation that draws from the designer’s toolkit to integrate the needs of people, the possibilities of technology, and the requirements for business success.',
            source: 'IDEO',
          },
        ],
      },
      {
        heading: WHEN,
        blocks: [
          {
            kind: 'p',
            text: 'When addressing dynamic, multifaceted, and inherently human problems. It has become crucial to develop and refine skills which allow us to understand and act on rapid changes in our environment and behavior.',
          },
          {
            kind: 'p',
            text: 'Design thinking addresses the fact that people need their interactions with technologies and other complex systems to be simple, intuitive, and pleasurable. It focuses on users’ experiences — especially the emotional ones.',
          },
        ],
      },
      {
        heading: HOW,
        blocks: [
          {
            kind: 'note',
            text: 'These stages are not always sequential: designers often run them in parallel, out of order, and repeat them iteratively.',
          },
          {
            kind: 'sub',
            heading: 'Empathize',
            blocks: [
              {
                kind: 'p',
                text: 'The best solutions come from the best insights into human behavior. Use those insights to design innovative solutions.',
              },
            ],
          },
          {
            kind: 'sub',
            heading: 'Define',
            blocks: [
              {
                kind: 'p',
                text: 'More than simply defining the problem: your **Point of View** is a unique design vision, framed by your specific users.',
              },
            ],
          },
          {
            kind: 'sub',
            heading: 'Ideate',
            blocks: [
              {
                kind: 'p',
                text: 'Generate the widest possible range of ideas against your Point of View, before judging any of them.',
              },
            ],
          },
          {
            kind: 'sub',
            heading: 'Prototype',
            blocks: [
              {
                kind: 'p',
                text: 'In early stages, keep prototypes inexpensive and low resolution, to learn quickly and explore possibilities.',
              },
            ],
          },
          {
            kind: 'sub',
            heading: 'Test',
            blocks: [
              {
                kind: 'p',
                text: 'An iterative mode in which you place low-resolution prototypes in the context of your users.',
              },
            ],
          },
        ],
      },
      {
        heading: PITFALLS,
        blocks: [
          {
            kind: 'p',
            text: 'Not to be confused with brainstorming: by bringing together the right people, creating the right environment, and using the right tools, you can drastically improve the outcomes of such initiatives.',
          },
        ],
      },
      {
        heading: REFS,
        blocks: [
          {
            kind: 'list',
            items: [
              'Stanford’s d.school Design Thinking Bootleg — a 90-page beginner’s guide: “In your hands you hold a Design Thinking Bootleg, a set of tools and methods that we keep in our back pockets, and now you can do the same”',
              '“The Difference Between Design Thinking, Lean Startup, and Agile” — Steve Glaveski, Medium',
              'IDEO’s definition and insights on design thinking',
              'Indra Nooyi, Harvard Business Review, on design thinking',
              'HBR — “Design thinking comes of age”',
              '[Google re:work — the design thinking guide](https://rework.withgoogle.com/guides/design-thinking/steps/introduction/)',
            ],
          },
        ],
      },
    ],
  },

  excel: {
    number: 9,
    title: 'Excel',
    originalDate: 'July 2021',
    bylines: [ALE],
    sections: [
      {
        heading: WHAT,
        blocks: [
          {
            kind: 'p',
            text: 'This is the knowledge that makes spreadsheets really worth using instead of your phone’s calculator: **the best Excel formulas for business decision-makers**.',
          },
        ],
      },
      {
        heading: WHEN,
        blocks: [
          {
            kind: 'list',
            items: [
              'When the quality of the numeric analysis will determine the quality of the business decision.',
              'When you need to make a good decision, and fast.',
              'When you need to convincingly communicate an idea.',
            ],
          },
        ],
      },
      {
        heading: HOW,
        blocks: [
          {
            kind: 'p',
            text: 'Get to love them, and they will be your best friends.',
          },
          {
            kind: 'p',
            text: 'Your muscle reflex should default to these tools instead of something else.',
          },
        ],
      },
      {
        heading: 'The formulas, and what each is better than',
        blocks: [
          {
            kind: 'table',
            head: ['Formula / Tool', 'Use it when…', 'Better than…'],
            rows: [
              ['The dollar `$` sign', 'Building a tool that is robust to maintain and scale', 'A dumbass not using `$`'],
              ['`=index(match(),match())`', 'Looking up data in a report tool that needs to be robust and versatile', '`vlookup`, `hlookup`'],
              ['`=sumifs()`, `=averageifs()`, `=countifs()`', 'Math operations on data that meets multiple conditional criteria', '`sumif`, `countif`'],
              ['`=concatenate()`', 'Concatenating text. Useful for certain use cases of `index(match())`', 'Using the `&`'],
              ['Pivot Table + Slicers + Calculated fields', 'Exploratory data analysis; quickly generating a report from multiple perspectives', 'Mixing a million `if` formulas'],
              ['`=getpivotdata()`', 'Sourcing a pivot table output into a more visual report', 'Presenting the pivot table itself'],
              ['Named Ranges', 'Getting your data house in order', "`='Sheet Reference'!AL3:ZM8`"],
              ['Goal Seek', 'Solving for a variable in an equation (despejando la X)', 'Manual trial and error'],
              ['Solver (add-in)', 'Finding the optimal number for several variables simultaneously (optimizing a function)', 'Manual trial and error nightmares'],
              ['Data table', 'Seeing how an output varies as different inputs vary too', 'Seeing one output at a time'],
            ],
          },
        ],
      },
      {
        heading: PITFALLS,
        blocks: [
          {
            kind: 'p',
            text: '**Not believing** — i.e. thinking that it’s too complicated and therefore not worth doing.',
          },
        ],
      },
      {
        heading: REFS,
        blocks: [
          {
            kind: 'list',
            items: [
              '[GETPIVOTDATA — Microsoft support](https://support.office.com/en-us/article/getpivotdata-function-8c083b99-a922-4ca0-af5e-3af55960761f)',
              '[Google Sheets functions — Google support](https://support.google.com/docs/answer/6167538?hl=en)',
              '[Chandoo](https://chandoo.org/)',
              'The Excel or Google Sheets automatic tooltips',
              'Just check out the Excel function library (click away! Move fast and break things)',
              'Just google “excel formula_name_here” — support.office.com, mrexcel, and the rest of the results',
            ],
          },
        ],
      },
    ],
  },

  flowcharts: {
    number: 10,
    title: 'Flowcharts',
    originalDate: 'July 2021',
    bylines: [JAIME],
    sections: [
      {
        heading: WHAT,
        blocks: [
          {
            kind: 'p',
            text: 'A flowchart is a **visual representation of the sequence of steps and decisions** needed to perform a process. Each step is noted within a diagram shape, linked by connecting lines and directional arrows, so anyone can view the flowchart and logically follow the process from beginning to end.',
          },
        ],
      },
      {
        heading: WHEN,
        blocks: [
          {
            kind: 'p',
            text: 'In designing and documenting simple processes or programs. They help visualize what is going on, and thereby help understand a process — and perhaps find less-obvious features within it, like flaws and bottlenecks.',
          },
          {
            kind: 'p',
            text: 'They let the author correctly locate the responsibility for performing an action or making a decision.',
          },
        ],
      },
      {
        heading: HOW,
        blocks: [
          {
            kind: 'p',
            text: 'The two basic types of boxes in a flowchart are: **(1) a processing step**, usually called an activity, denoted as a rectangular box; and **(2) a decision**, usually denoted as a diamond.',
          },
          {
            kind: 'p',
            text: 'You can use special shapes to represent different types of actions or steps (Document, Input/Output, Subroutine, Delay, Display, etc.), and different types of flowcharts for each control focus: document flowcharts, data flowcharts, system flowcharts, and program flowcharts.',
          },
        ],
      },
      {
        heading: PITFALLS,
        blocks: [
          {
            kind: 'p',
            text: 'Unless you have specialized knowledge and your diagram is for a peer group with similar knowledge, stick to basic flowchart symbols. It is good practice to include a legend or symbol key.',
          },
          {
            kind: 'p',
            text: 'It is not the same as a workflow (a series of actions that define a job or how work should be done). A flowchart is a diagram that *represents* a workflow.',
          },
        ],
      },
      {
        heading: REFS,
        blocks: [
          {
            kind: 'list',
            items: [
              '[SmartDraw — flowchart symbols](https://www.smartdraw.com/flowchart/flowchart-symbols.htm)',
              '[HEFLO — BPM software to model, publish, improve, and automate business processes](https://www.heflo.com/)',
              '[draw.io / diagrams.net — free online diagram software](https://www.diagrams.net/)',
            ],
          },
        ],
      },
    ],
  },
};
