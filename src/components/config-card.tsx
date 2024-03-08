import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface CardConfig {
  title: string;
  description: string;
  entries: {
    command: string;
    description: string;
  }[];
}

export const ConfigCard = ({ config }: { config: CardConfig }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{config.title}</CardTitle>
        <CardDescription>{config.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableBody>
            {config.entries.map((ce) => (
              <TableRow key={ce.command}>
                <TableCell className="font-medium">
                  <Badge className="whitespace-nowrap" variant="secondary">
                    {ce.command}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">{ce.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
