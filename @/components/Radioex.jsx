
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        
      </div>
      
    </RadioGroup>
  )
}