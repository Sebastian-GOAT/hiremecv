import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from '@/components/ui/alert-dialog';

export function ResetAlert({ children, onClick }: { children: React.ReactNode; onClick: () => void; }) {

    return (
        <AlertDialog>

            {/* Trigger (button) */}
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>

            <AlertDialogContent>
                <AlertDialogHeader>

                    {/* Content */}
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will reset your
                        progress and load the default data.
                    </AlertDialogDescription>

                </AlertDialogHeader>
                <AlertDialogFooter>

                    {/* Cancel button */}
                    <AlertDialogCancel
                        className='cursor-pointer'
                    >
                        Cancel
                    </AlertDialogCancel>
                    {/* Confirm button */}
                    <AlertDialogAction
                        onClick={onClick}
                        className='cursor-pointer'
                    >
                        Confirm
                    </AlertDialogAction>

                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}