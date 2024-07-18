import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex justify-center"> {/* Container to center the card */}
      <Card className="w-full max-w-md bg-background text-foreground p-6 rounded-2xl shadow-lg mx-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold">Dex Aimbot</CardTitle>
            <div className="flex items-center space-x-2" />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Boost your aim and dominate the battlefield with our powerful Dex Aimbot.
          </p>
          <div className="space-y-2">
            <Label htmlFor="cooling-power" className="text-base font-medium">
              Aimbot
            </Label>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-lg">5%</span>
              <Progress value={5} className="w-full bg-muted rounded-full" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="recoil" className="text-base font-medium">
              Recoil
            </Label>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-lg">5%</span>
              <Progress value={5} className="w-full bg-muted rounded-full" />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Label htmlFor="fps" className="text-base font-medium">
              FPS
            </Label>
            <Switch id="fps" aria-label="Toggle FPS" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-primary text-primary-foreground font-medium rounded-lg py-3">
            Apply Dex Aimbot
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
