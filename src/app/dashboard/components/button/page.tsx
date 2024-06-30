import { Button } from "@/components/atoms/button";
import SectionDisplay from "../_components/SectionDisplay";

function ButtonPage() {
  return (
    <div className="text-white p-8">
      <section>
        <h2 className="text-3xl mb-4 font-semibold">Buttons</h2>

        <div className="space-y-6">

          <SectionDisplay name="Button Kinds">
            <Button label="Solid" kind="solid" />
            <Button label="Outline" kind="outline" />
            <Button label="Glass" kind="glass" />
          </SectionDisplay>

          <SectionDisplay name="Button Variants">
            <Button label="Button Solid" variant="primary" />
            <Button label="Button Solid" variant="secondary" />
          </SectionDisplay>

          <SectionDisplay name="Button Sizes">
            <Button label="Small" size="sm" />
            <Button label="Medium" size="md" />
            <Button label="Large" size="lg" />
          </SectionDisplay>

        </div>
      </section>
    </div>
  );
}

export default ButtonPage;