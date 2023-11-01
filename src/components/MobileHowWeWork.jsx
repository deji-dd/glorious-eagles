import Line from "../assets/how-we-work-line.svg";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function MobileHowWeWork() {
  const h1_style = {
    color: "var(--Secondary-orange, #FD7528)",
    FontSize: "1.87184rem",
  };
  const h5_style = {
    color: "var(--Primary-colour, #180344)",
    fontSize: "1.16992rem",
  };
  const img_style = {
    width: "19.5rem",
    transform: "rotate(180deg)",
  };
  const div_style = {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "0.58rem",
  };
  const li_style = {
    width: "22.72rem",
    color: "var(--Text, #4D4D4D)",
    fontSize: "1.28rem",
    lineHeight: "1.95528rem",
  };
  const div_text_style = {
    padding: "0 1.28rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.58rem",
  };

  return (
    <div
      style={{
        width: "30rem",
        background: "var(--Light-purple, #F1EBFE)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "1rem",
        padding: "3rem 0",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "1.3rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.56rem",
            lineHeight: "3.0256rem",
            letterSpacing: "0.0256rem",
          }}
        >
          How We Work
        </h2>
        <p
          style={{
            width: "26.8rem",
            color: "var(--Text, #4D4D4D)",
            fontSize: "1.28rem",
            lineHeight: "2.0888rem",
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
          gap: "3rem",
          paddingTop: "3.3rem",
          overflow: "hidden",
        }}
      >
        <hr
          style={{
            width: "0.5rem",
            height: "279rem",
            flexShrink: "0",
            opacity: "0.1",
            background:
              "linear-gradient(295deg, #4563FF 9.05%, #456AF9 22.42%, #4388DD 79.28%)",
            position: "absolute",
            margin: "0",
            left: "0.55rem",
          }}
        />
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOut="animate__fadeOutRight"
        >
          <div style={div_style}>
            <div style={div_text_style}>
              <h1 style={h1_style}>01</h1>
              <h5 style={h5_style}>
                Initial consultation and assessment process
              </h5>
              <ul>
                <li style={li_style}>
                  <p>
                    The process begins with an initial assessment, which
                    includes interviews, observations, and assessments to gather
                    information about the client's behavior, strengths,
                    weaknesses, and goals.
                  </p>
                </li>
                <li style={li_style}>
                  <p>
                    The therapist may also consult with caregivers, teachers,
                    and other professionals to gain a comprehensive
                    understanding of the client's needs.
                  </p>
                </li>
              </ul>
            </div>
            <img src={Line} style={img_style} />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOut="animate__fadeOutRight"
        >
          <div style={div_style}>
            <div style={div_text_style}>
              <h1 style={h1_style}>02</h1>
              <h5 style={h5_style}>Functional Behavior Assessment (FBA)</h5>
              <ul>
                <li style={li_style}>
                  <p>
                    If necessary, an FBA is conducted to identify the causes or
                    triggers of challenging behaviors. This involves data
                    collection and analysis to determine the function of the
                    behavior.
                  </p>
                </li>
              </ul>
            </div>
            <img src={Line} style={img_style} />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOut="animate__fadeOutRight"
        >
          <div style={div_style}>
            <div style={div_text_style}>
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
            </div>
            <img src={Line} style={img_style} />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOut="animate__fadeOutRight"
        >
          <div style={div_style}>
            <div style={div_text_style}>
              <h1 style={h1_style}>04</h1>
              <h5 style={h5_style}>
                Designing a Behavior Intervention Plan (BIP)
              </h5>
              <ul>
                <li style={li_style}>
                  <p>
                    Based on the assessment and objectives, the therapist
                    creates a BIP. This plan outlines the strategies and
                    interventions that will be used to target and modify
                    behaviors.
                  </p>
                </li>
              </ul>
            </div>
            <img src={Line} style={img_style} />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOut="animate__fadeOutRight"
        >
          <div style={div_style}>
            <div style={div_text_style}>
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
            </div>
            <img src={Line} style={img_style} />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOut="animate__fadeOutRight"
        >
          <div style={div_style}>
            <div style={div_text_style}>
              <h1 style={h1_style}>06</h1>
              <h5 style={h5_style}>Implementing Interventions</h5>
              <ul>
                <li style={li_style}>
                  <p>
                    The therapist works directly with the client to implement
                    the interventions outlined in the BIP. These interventions
                    may include teaching new skills, using reinforcement
                    strategies, or modifying the environment to reduce
                    challenging behaviors.
                  </p>
                </li>
              </ul>
            </div>
            <img src={Line} style={img_style} />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOut="animate__fadeOutRight"
        >
          <div style={div_style}>
            <div style={div_text_style}>
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
            </div>
            <img src={Line} style={img_style} />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOut="animate__fadeOutRight"
        >
          <div style={div_style}>
            <div style={div_text_style}>
              <h1 style={h1_style}>08</h1>
              <h5 style={h5_style}>Parent/Caregiver Training</h5>
              <ul>
                <li style={li_style}>
                  <p>
                    A significant aspect of ABA therapy involves training
                    parents and caregivers to use ABA techniques and strategies
                    consistently outside of therapy sessions. This helps
                    generalize skills and behaviors to different settings
                  </p>
                </li>
              </ul>
            </div>
            <img src={Line} style={img_style} />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOut="animate__fadeOutRight"
        >
          <div style={div_style}>
            <div style={div_text_style}>
              <h1 style={h1_style}>09</h1>
              <h5 style={h5_style}>Generalization and Maintenance</h5>
              <ul>
                <li style={li_style}>
                  <p>
                    The therapist works to ensure that the client can generalize
                    newly learned skills and behaviors to various environments
                    and situations. Maintenance strategies are put in place to
                    sustain progress over time.
                  </p>
                </li>
              </ul>
            </div>
            <img src={Line} style={img_style} />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOut="animate__fadeOutRight"
        >
          <div style={div_style}>
            <div style={div_text_style}>
              <h1 style={h1_style}>10</h1>
              <h5 style={h5_style}>Transition Planning (if applicable)</h5>
              <ul>
                <li style={li_style}>
                  <p>
                    For clients nearing the end of therapy or transitioning to a
                    different program or setting (e.g., school), the therapist
                    may assist in developing a transition plan to ensure a
                    smooth transfer of skills and support.
                  </p>
                </li>
              </ul>
            </div>
            <img src={Line} style={img_style} />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOut="animate__fadeOutRight"
        >
          <div style={div_style}>
            <div style={div_text_style}>
              <h1 style={h1_style}>11</h1>
              <h5 style={h5_style}>Regular Review and Progress Reporting</h5>
              <ul>
                <li style={li_style}>
                  <p>
                    Progress is regularly reviewed with caregivers, and reports
                    on the client's achievements and areas for improvement are
                    shared. Adjustments to the treatment plan are made as
                    needed.
                  </p>
                </li>
              </ul>
            </div>
            <img src={Line} style={img_style} />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          animateOut="animate__fadeOutRight"
        >
          <div style={div_style}>
            <div style={div_text_style}>
              <h1 style={h1_style}>12</h1>
              <h5 style={h5_style}>Discharge Planning</h5>
              <ul>
                <li style={li_style}>
                  <p>
                    When the client has achieved their goals and no longer
                    requires intensive ABA therapy, a discharge plan is
                    developed to ensure a smooth transition out of therapy while
                    maintaining gains.
                  </p>
                </li>
              </ul>
            </div>
            <img src={Line} style={img_style} />
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
}
