"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check } from "lucide-react";

export default function PaymentModal({ open, setOpen, selected, modalRef }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("TXCWGXe1DKZPK8G4QPZdmVKFRMQyFYqkpr");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // revert after 2s
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-md mx-auto rounded-3xl border border-neutral-800 bg-neutral-900 p-6 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="text-lg font-semibold">Payment Instructions</h4>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="h-9 w-9 rounded-xl border border-neutral-700 hover:bg-neutral-800 grid place-items-center"
              >
                <span className="sr-only">Close</span>✕
              </button>
            </div>

            {/* Selected Card Info */}
            <div className="mt-4 space-y-2 text-sm">
              <p className="font-bold text-neutral-300">Selected Card:</p>
              <p className="font-medium text-neutral-300">{selected?.name}</p>
              <p className="text-yellow-400">${selected?.price.toFixed(2)}</p>
              <p className="text-neutral-300">Balance: ${selected?.balance}</p>
            </div>

            {/* Payment Method */}
            <div className="mt-6 space-y-3 text-sm">
              <p className="text-neutral-300 font-medium">Payment Method:</p>
              <p className="text-neutral-400">Send the payment on the Tron (TRC20) network to the above wallet address:</p>

              <div className="flex bg-neutral-800 rounded-lg items-center gap-2 mt-2 px-3 py-2">
                <span className="font-mono text-sm text-gray-100 truncate">
                  TXCWGXe1DKZPK8G4QPZdmVKFRMQyFYqkpr
                </span>
                <button
                  onClick={handleCopy}
                  className="ml-auto rounded-xl p-2 bg-yellow-400 text-black hover:brightness-95 transition shadow shadow-yellow-500/20"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {copied ? (
                      <motion.span
                        key="check"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Check size={18} />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="copy"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Copy size={18} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-6 space-y-2 text-sm text-neutral-300">
              <p className="font-medium">Instructions:</p>
              <ol className="list-decimal list-inside space-y-1 text-neutral-400">
                <li>Send exactly ${selected?.price.toFixed(2)} to above wallet address</li>
                <li>Take a screenshot of the payment confirmation</li>
                <li>Send the screenshot to our Telegram</li>
                <li>You will receive your card details shortly</li>
              </ol>
            </div>

            {/* Telegram Button */}
            <div className="mt-6">
              <a
                href="https://t.me/Jackwilliam019"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-full rounded-xl px-4 py-3 text-sm font-medium bg-yellow-400 text-black hover:brightness-95 active:brightness-90 transition shadow-lg shadow-yellow-500/20"
              >
                Send Screenshot via Telegram
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}