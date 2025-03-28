import Line from "../assets/how-we-work-line.svg";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function HowWeWork() {
  const h1_style = {
    color: "var(--Secondary-orange, #FD7528)",
    display: "block",
  };
  const h5_style = {
    color: "var(--Primary-colour, #180344)",
    width: "39.1875rem",
    fontSize: "2.53163rem",
  };
  const h5_right = {
    ...h5_style,
    textAlign: "right",
  };
  const img_style = {
    width: "42.29rem",
  };
  const img_right = {
    ...img_style,
    transform: "scaleX(-1)",
  };
  const div_style = {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1.26581rem",
    width: "80.5rem",
  };
  const div_right = {
    ...div_style,
    alignItems: "flex-end",
  };
  const li_style = {
    width: "36.5625rem",
    color: "var(--Text, #4D4D4D)",
    fontSize: "1.5rem",
    lineHeight: "2.5rem",
  };
  const li_right = {
    ...li_style,
    textAlign: "right",
  };
  return (
    <div
      style={{
        maxWidth: "90rem",
        width: "100%",
        height: "370rem",
        background: "var(--Light-purple, #F1EBFE)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "3.81rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <h2>How We Work</h2>
        <p
          style={{
            width: "77.9375rem",
            color: "var(--Text, #4D4D4D)",
            fontSize: "1.5rem",
            lineHeight: "2.5rem",
            textAlign: "center",
          }}
        >
          Throughout the entire process, communication and collaboration between
          the therapist, client, and caregivers are essential. ABA therapy is a
          dynamic and flexible approach that adapts to the client's changing
          needs and focuses on achieving meaningful and lasting behavior change.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          position: "relative",
          flexDirection: "column",
          gap: "1.3125rem",
        }}
      >
        <hr
          style={{
            width: "0.875rem",
            height: "345rem",
            flexShrink: "0",
            opacity: "0.1",
            background:
              "linear-gradient(295deg, #4563FF 9.05%, #4388DD 79.28%)",
            position: "absolute",
            margin: "0",
            left: "39.88rem",
          }}
        />
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOut="animate__fadeOutLeft"
        >
          <div style={div_style}>
            <h1 style={h1_style}>01</h1>
            <h5 style={h5_style}>
              Initial consultation and assessment process
            </h5>
            <ul>
              <li style={{ ...li_style, marginBottom: "2rem" }}>
                <p>
                  The process begins with an initial assessment, which includes
                  interviews, observations, and assessments to gather
                  information about the client's behavior, strengths,
                  weaknesses, and goals.
                </p>
              </li>
              <li style={li_style}>
                <p>
                  The therapist may also consult with caregivers, teachers, and
                  other professionals to gain a comprehensive understanding of
                  the client's needs.
                </p>
              </li>
            </ul>
            <img src={Line} style={img_style} />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOut="animate__fadeOutRight"
        >
          <div style={div_right}>
            <h1 style={h1_style}>02</h1>
            <h5 style={h5_right}>Functional Behavior Assessment (FBA)</h5>
            <ul>
              <li style={li_right}>
                <p>
                  If necessary, an FBA is conducted to identify the causes or
                  triggers of challenging behaviors. This involves data
                  collection and analysis to determine the function of the
                  behavior.
                </p>
              </li>
            </ul>
            <img src={Line} style={img_right} />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOut="animate__fadeOutLeft"
        >
          <div style={div_style}>
            <h1 style={h1_style}>03</h1>
            <h5 style={h5_style}>Setting Clear Objectives</h5>
            <ul>
              <li style={li_style}>
                <p>
                  The therapist and client (or their caregivers) work together
                  to set clear and measurable behavioral objectives. These
                  objectives are specific, observable, and tailored to the
                  client's needs and goals.
                </p>
              </li>
            </ul>
            <img src={Line} style={img_style} />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOut="animate__fadeOutRight"
        >
          <div style={div_right}>
            <h1 style={h1_style}>04</h1>
            <h5 style={h5_right}>
              Designing a Behavior Intervention Plan (BIP)
            </h5>
            <ul>
              <li style={li_right}>
                <p>
                  Based on the assessment and objectives, the therapist creates
                  a BIP. This plan outlines the strategies and interventions
                  that will be used to target and modify behaviors.
                </p>
              </li>
            </ul>
            <img src={Line} style={img_right} />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOut="animate__fadeOutLeft"
        >
          <div style={div_style}>
            <h1 style={h1_style}>05</h1>
            <h5 style={h5_style}>Data Collection</h5>
            <ul>
              <li style={li_style}>
                <p>
                  During therapy sessions, the therapist collects data on the
                  client's behavior. This data is used to monitor progress,
                  evaluate the effectiveness of interventions, and make
                  necessary adjustments to the plan.
                </p>
              </li>
            </ul>
            <img src={Line} style={img_style} />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOut="animate__fadeOutRight"
        >
          <div style={div_right}>
            <h1 style={h1_style}>06</h1>
            <h5 style={h5_right}>Implementing Interventions</h5>
            <ul>
              <li style={li_right}>
                <p>
                  The therapist works directly with the client to implement the
                  interventions outlined in the BIP. These interventions may
                  include teaching new skills, using reinforcement strategies,
                  or modifying the environment to reduce challenging behaviors.
                </p>
              </li>
            </ul>
            <img src={Line} style={img_right} />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOut="animate__fadeOutLeft"
        >
          <div style={div_style}>
            <h1 style={h1_style}>07</h1>
            <h5 style={h5_style}>Continuous Assessment and Adjustment</h5>
            <ul>
              <li style={{ ...li_style, marginBottom: "2rem" }}>
                <p>
                  ABA therapy is highly individualized, and the therapist
                  continuously assesses the client's progress and adjusts
                  interventions accordingly.
                </p>
              </li>
              <li style={li_style}>
                <p>
                  Data analysis is critical in determining whether the
                  interventions are effective or if modifications are needed.
                </p>
              </li>
            </ul>
            <img src={Line} style={img_style} />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOut="animate__fadeOutRight"
        >
          <div style={div_right}>
            <h1 style={h1_style}>08</h1>
            <h5 style={h5_right}>Parent/Caregiver Training</h5>
            <ul>
              <li style={li_right}>
                <p>
                  A significant aspect of ABA therapy involves training parents
                  and caregivers to use ABA techniques and strategies
                  consistently outside of therapy sessions. This helps
                  generalize skills and behaviors to different settings
                </p>
              </li>
            </ul>
            <img src={Line} style={img_right} />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOut="animate__fadeOutLeft"
        >
          <div style={div_style}>
            <h1 style={h1_style}>09</h1>
            <h5 style={h5_style}>Generalization and Maintenance</h5>
            <ul>
              <li style={li_style}>
                <p>
                  The therapist works to ensure that the client can generalize
                  newly learned skills and behaviors to various environments and
                  situations. Maintenance strategies are put in place to sustain
                  progress over time.
                </p>
              </li>
            </ul>
            <img src={Line} style={img_style} />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOut="animate__fadeOutRight"
        >
          <div style={div_right}>
            <h1 style={h1_style}>10</h1>
            <h5 style={h5_right}>Transition Planning (if applicable)</h5>
            <ul>
              <li style={li_right}>
                <p>
                  For clients nearing the end of therapy or transitioning to a
                  different program or setting (e.g., school), the therapist may
                  assist in developing a transition plan to ensure a smooth
                  transfer of skills and support.
                </p>
              </li>
            </ul>
            <img src={Line} style={img_right} />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOut="animate__fadeOutLeft"
        >
          <div style={div_style}>
            <h1 style={h1_style}>11</h1>
            <h5 style={h5_style}>Regular Review and Progress Reporting</h5>
            <ul>
              <li style={li_style}>
                <p>
                  Progress is regularly reviewed with caregivers, and reports on
                  the client's achievements and areas for improvement are
                  shared. Adjustments to the treatment plan are made as needed.
                </p>
              </li>
            </ul>
            <img src={Line} style={img_style} />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOut="animate__fadeOutRight"
        >
          <div style={div_right}>
            <h1 style={h1_style}>12</h1>
            <h5 style={h5_right}>Discharge Planning</h5>
            <ul>
              <li style={li_right}>
                <p>
                  When the client has achieved their goals and no longer
                  requires intensive ABA therapy, a discharge plan is developed
                  to ensure a smooth transition out of therapy while maintaining
                  gains.
                </p>
              </li>
            </ul>
            <img src={Line} style={img_right} />
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
}
