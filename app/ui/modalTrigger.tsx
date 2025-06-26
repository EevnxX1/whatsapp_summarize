'use client';

import { useState } from 'react';
import Modal from '@/app/ui/modal';
import { Button } from './button';

export default function ModalTriggerClient() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="mt-4">
      <Button 
      onClick={() => setShowModal(true)}
                className="w-[120px] flex mt-[-16px]">
                    <p className="m-auto">Summarize</p>
                </Button>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2 className="text-xl font-semibold mb-2 text-gray-700">Summarize</h2>
        <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque omnis quos deleniti vitae enim modi quasi doloribus earum id animi ea voluptatibus dolorem veritatis placeat blanditiis dolore consectetur, est aperiam necessitatibus sequi at iste quia vero rem! Laborum atque odit minus! Placeat officiis quisquam est deserunt aliquid sequi magnam possimus..</p>
      </Modal>
    </div>
  );
}
