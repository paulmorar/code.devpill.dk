import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

interface CardConfig {
  title: string;
  description: string;
  entries: { command: string; description: string }[];
}

export const ConfigCard = ({ config }: { config: CardConfig }) => {
  return (
    <Card className="group relative overflow-hidden border-border/60 bg-card/80 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
      />
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold tracking-tight">
          {config.title}
        </CardTitle>
        <CardDescription className="text-sm">
          {config.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <Table>
          <TableBody>
            {config.entries.map((ce) => (
              <TableRow
                key={ce.command}
                className="border-border/40 hover:bg-accent/40"
              >
                <TableCell className="py-2 pl-0">
                  <kbd className="kbd whitespace-nowrap">{ce.command}</kbd>
                </TableCell>
                <TableCell className="py-2 pr-0 text-right text-sm text-muted-foreground">
                  {ce.description}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
