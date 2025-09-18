import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { WarningCircleIcon } from "@phosphor-icons/react";

export default function SaveChangesAlert({
  open,
  onClose,
  onSkipChanges,
}: {
  open: boolean;
  onClose: () => void;
  onSkipChanges: () => void;
}) {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <WarningCircleIcon size={40} className="text-destructive mb-3" />
            Unsaved Changes!
          </AlertDialogTitle>
          <AlertDialogDescription>
            You've un-saved changes, do you want to ignore those changes?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => onClose()}>
            Return
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-destructive hover:bg-destructive/70"
            type="button"
            onClick={() => onSkipChanges()}
          >
            Don't save changes
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
