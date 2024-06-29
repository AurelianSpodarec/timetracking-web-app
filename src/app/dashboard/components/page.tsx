import { Button } from "@/components/atoms/button";

function PageComponents() {
  return (
    <div>

      <section>
        <h2>Buttons</h2>
        <div>
          <Button label="Button Solid" variant="primary" kind="solid" />
          <Button label="Button Solid" variant="secondary" kind="solid" />
        </div>
        <div>
          <Button label="Button Outline" variant="primary" kind="outline" />
          <Button label="Button Outline" variant="secondary" kind="outline" />
        </div>
        <div>
          <Button label="Button Glass" variant="primary" kind="glass" />
          <Button label="Button Glass" variant="secondary" kind="glass" />
        </div>
      </section>
    </div>
  );
}

export default PageComponents
