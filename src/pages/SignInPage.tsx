import { FormComponent } from '@/components/SignInComponents/Form';
import { Button } from '@/components/ui/button/button';
import { Spinner } from '@/components/ui/spinner';
import { ChevronRight, Lock } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
const SignInPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <FormComponent />
      <Button variant="primary">
        <Lock />
        <span className="button-text">Welcome</span>
        <ChevronRight />
      </Button>
      <Button variant="secondary">
        <Spinner className="size-6" />
        <span className="button-text">Loading ...</span>
        <ChevronRight />
      </Button>
      <Tabs className="flex items-center" defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Selected Tap</TabsTrigger>
          <TabsTrigger value="password">Tap</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Make changes to your account here.</TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
      <Badge prefixIcon={true} variant="secondary">
        -20%
      </Badge>
      <DropdownMenu>
        <DropdownMenuTrigger />
        <DropdownMenuContent>
          <DropdownMenuLabel>Suggestions</DropdownMenuLabel>
          <DropdownMenuItem>Placeholder option 01</DropdownMenuItem>
          <DropdownMenuItem>Placeholder option 01</DropdownMenuItem>
          <DropdownMenuItem>Placeholder option 01</DropdownMenuItem>
          <DropdownMenuItem>Placeholder option 01</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SignInPage;
