export default function Home() {
  return (
    <div className="space-y-6">
        <p className="text-center">
          <b>ASPIRE Lab</b><br />
          <span className="text-sm text-muted-foreground">
            Department of Mechanical and Aerospace Engineering, IIT Hyderabad
          </span>
        </p>
        <div className="space-y-4">
          <p>Welcome to the lab website.</p>

          <p>
            <strong>ASPIRE Lab</strong> at IITH focuses on advancing{" "}
            <strong>autonomous robotic systems</strong> endowed with perception,
            learning, and intelligent decision-making in complex environments.
            Our research covers a broad spectrum of robotic platforms, including
            but not limited to, swarms of aerial drones, quadruped robots, biped
            / humanoid robots, human-robot interaction, wheeled mobile robots,
            and AUVs / underwater robots.
          </p>

          <p>
            Our work combines principles of conventional{" "}
            <strong>control</strong> theory with learning-based approaches such
            as <strong>deep reinforcement learning</strong> and{" "}
            <strong>robot vision</strong> to develop systems capable of
            adaptive, data-driven behavior. Through these efforts,{" "}
            <strong>ASPIRE</strong> aims to integrate model-based understanding
            with data-driven intelligence to develop reliable and efficient
            autonomous systems for <strong>exploration</strong>, interaction,
            and real-world operation.
          </p>
        </div>
      
    </div>
  );
}
