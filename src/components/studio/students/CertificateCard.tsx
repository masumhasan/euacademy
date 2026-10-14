import { Icon } from "@/components/ui/Icon";
import type { StudentCertificate } from "@/types/students";

export function CertificateCard({ certificate }: { certificate?: StudentCertificate }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="font-label-caps text-label-caps text-primary uppercase font-bold tracking-wider">Cryptographic Certificate</span>
        {certificate && (
          <span className="font-label-code text-label-code text-tertiary flex items-center gap-1 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary" /> Verifiable
          </span>
        )}
      </div>
      <div className="bg-surface-level-2 rounded-lg p-space-sm flex flex-col gap-2">
        {certificate ? (
          <>
            <div className="flex items-center gap-space-sm">
              <div className="w-9 h-9 rounded bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <Icon className="text-[20px]" name="military_tech" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-label-interactive text-label-interactive text-text-primary truncate">{certificate.id}</span>
                <span className="font-label-code text-label-code text-text-muted truncate">{certificate.hash}</span>
              </div>
            </div>
            <p className="font-body-muted text-body-muted text-text-secondary text-xs">
              Anchored on Ethereum L2 &amp; registered with EU Chancery Registry for consul authentication.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <button className="flex-1 py-1.5 px-space-xs rounded bg-surface-level-1 hover:bg-surface-elevated text-text-primary text-xs font-label-interactive transition-all" type="button">
                Public Ledger Link
              </button>
              <button className="py-1.5 px-space-sm rounded bg-status-danger-bg text-status-danger hover:bg-status-danger/20 text-xs font-label-interactive transition-all" type="button">
                Revoke / Re-issue
              </button>
            </div>
          </>
        ) : (
          <p className="font-body-muted text-body-muted text-text-secondary text-xs">
            No certificate issued yet. It is minted automatically once the dossier reaches 100% completion.
          </p>
        )}
      </div>
    </div>
  );
}
