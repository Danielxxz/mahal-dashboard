import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ProductDetails__Id({ id }: { id: string }) {
  return (
    <Card className="p-3">
      <div className="grid w-full max-w-sm items-end gap-3 min-w-sm">
        <Label htmlFor="product-details-product-id">Id (Can't change)</Label>
        <Input
          readOnly
          id="product-details-product-id"
          type="text"
          defaultValue={id}
        />
      </div>
    </Card>
  );
}
