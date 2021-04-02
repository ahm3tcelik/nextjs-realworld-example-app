import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button
} from '@material-ui/core';

type IProps = {
    isOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PrivacyPolicyDialog = (props: IProps) => {
    
    const handleClose = () => {
        props.setOpen(false);
    };

    return (
        <Dialog
            open={props.isOpen}
            onClose={handleClose}
            scroll="paper"
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
            <DialogTitle id="scroll-dialog-title">Privacy Policy</DialogTitle>
            <DialogContent dividers={true}>
                <DialogContentText
                    id="scroll-dialog-description"
                    tabIndex={-1}>
                    Tüm Kullanıcılarımızın gizliliği bizim için çok önemlidir. Bir Uygulama Kullanıcısı olarak Hizmetimizi kullandığınızda, (Uygulama Yayıncısı olarak) Kişisel Verilerinizi işleriz. Bu Gizlilik Bildirimi, Kişisel Verilerinizi nasıl koruduğumuzu ve işleme koyduğumuzu açıklar. Dikkatlice okumanızı öneririz.
                    Bu Gizlilik Bildirimindeki bölümler size aşağıdakiler hakkında bilgi verir:
                    İşlenen Kişisel Verilerin türleri,
                    Kişisel Verilerin işlenme amaçları,
                    Kişisel Verilerin işlendiği yerler,
                    Kişisel Verileri korumak için uygulanan güvenlik önlemleri,
                    Üçüncü şahıslarla ilgili sorumluluk sınırları,
                    Kişisel Verilerinizi görüntüleme, değiştirme ve silme,
                    Bu Gizlilik Bildiriminde yapılan değişiklikler;
                    Sorunuz veya açıklamalarınız varsa ne yapacaksınız?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleClose} color="secondary" variant="contained">
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default PrivacyPolicyDialog;