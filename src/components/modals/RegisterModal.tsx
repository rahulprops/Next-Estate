'use client'
import { useAuthModal } from "@/store/useAuthModal";
import Modal from "./Modal";

export default function RegisterModal(){
    const { openLogin,isRegisterOpen,closeRegister}=useAuthModal()
    return (
        <Modal title="Register" onClose={closeRegister} isOpen={isRegisterOpen}>
            <p>Register Modal</p>
        </Modal>
    )
}