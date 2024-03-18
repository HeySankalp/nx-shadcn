// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Button, UiComponents } from '@smalter-application/ui-components';


export function App() {
  return (
    <div>
      <Button>shadcn</Button>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default App;
