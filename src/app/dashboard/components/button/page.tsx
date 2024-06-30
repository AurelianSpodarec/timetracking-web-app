import { Button } from "@/components/atoms/button";
import SectionDisplay from "../_components/SectionDisplay";

function IconRocket() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="margin-right-sm svg-inline--fa fa-rocket-launch fa-lg"
      data-icon="rocket-launch"
      data-prefix="fas"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M117.8 128H207C286.9-3.7 409.5-8.5 483.9 5.3c11.6 2.2 20.7 11.2 22.8 22.8 13.8 74.4 9 197-122.7 276.9v89.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1.2S224 496.7 224 488V373.3c0-22.6-9-44.3-25-60.3s-37.7-25-60.3-25H24c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7.2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3zm306.2 0a40 40 0 10-80 0 40 40 0 1080 0zM166.5 470C132.3 504.3 66 511 28.3 511.9c-16 .4-28.6-12.2-28.2-28.2C1 446 7.7 379.7 42 345.5c34.4-34.4 90.1-34.4 124.5 0s34.4 90.1 0 124.5zm-46.7-36.4c11.4-11.4 11.4-30 0-41.4s-30-11.4-41.4 0c-10.1 10.1-13 28.5-13.7 41.3-.5 8 5.9 14.3 13.9 13.9 12.8-.7 31.2-3.7 41.3-13.7z"
      ></path>
    </svg>
  )
}

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

          <SectionDisplay name="Loading Button">
            <Button label="Loading" isLoading={true} />
          </SectionDisplay>

          <SectionDisplay name="Button with Icon">
            <Button label="Icon" icon={IconRocket()} />
            <Button label="Icon Right" icon={IconRocket()} iconPosition="right" />
            <Button label="Icon Loading" isLoading={true} icon={IconRocket()} />
            <Button label="Icon Right Loading" isLoading={true} icon={IconRocket()} iconPosition="right" />
          </SectionDisplay>

          <SectionDisplay name="States">
            <Button label="Disabled" disabled={true} />
          </SectionDisplay>

          <SectionDisplay name="Block">
            <Button label="Disabled" block />
          </SectionDisplay>

        </div>
      </section>
    </div>
  );
}

export default ButtonPage;