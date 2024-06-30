import { Button } from "@/components/atoms/button";

function PageComponents() {
  return (
    <div>

      <section>
        <h2>Buttons</h2>
        <div>
          <Button label="Button Solid" variant="primary" />
          <Button label="Button Solid" variant="secondary" />
        </div>
        <div>
          <Button label="Button Outline" variant="primary" kind="outline" />
          <Button label="Button Outline" variant="secondary" kind="outline" />
        </div>
        <h2>Sizes</h2>
        <div>
          <Button label="Small" size="sm" />
          <Button label="Medium" size="md" />
          <Button label="Large" size="lg" />
        </div>
      </section>

    </div>
  );
}

export default PageComponents
