import { Button , } from "@workspace/ui/components/button"
import { Input} from "@workspace/ui/components/input"

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1>hello world  hello widget</h1>
          <Button className="mt-2">Button</Button>
          <Input/>
        </div>
        <div className="text-muted-foreground font-mono text-xs">
         
        </div>
      </div>
    </div>
  )
}
