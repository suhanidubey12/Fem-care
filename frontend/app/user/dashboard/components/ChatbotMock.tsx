"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function ChatbotMock() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <Card className="fixed bottom-20 right-6 w-72 p-4 shadow-lg">
          <p className="text-sm text-[#3A3A4A] mb-2">
            Hi! I’m here to support you 🌸
          </p>
          <p className="text-xs text-[#6B6B7A]">
            You can ask about lifestyle tips or understanding your symptoms.
          </p>
        </Card>
      )}

      <Button
        className="fixed bottom-6 right-6 rounded-full bg-[#E76F8A] text-white"
        onClick={() => setOpen(!open)}
      >
        💬
      </Button>
    </>
  );
}
