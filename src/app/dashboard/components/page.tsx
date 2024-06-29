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
      </section>
      
    </div>
  );
}

export default PageComponents
