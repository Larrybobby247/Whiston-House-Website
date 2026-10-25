import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { ArrowRight, Check, Loader2, RotateCcw } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { applicationInput, type ApplicationInput } from "@contracts/application";
import { trpc } from "@/providers/trpc";
import { roles, type RoleKey } from "../data";
import { Reveal } from "./Reveal";

const defaults: ApplicationInput = {
  fullName: "", age: 18, hasPassport: "yes", currentOccupation: "", role: "nanny",
  experienceYears: 0, underContract: "no", contractTimeRemaining: "", currentSalary: "", gender: "", country: "",
};

export function ApplicationForm({ selectedRole = "nanny" }: { selectedRole?: RoleKey }) {
  const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm<ApplicationInput>({
    resolver: zodResolver(applicationInput),
    defaultValues: { ...defaults, role: selectedRole },
  });
  const submit = trpc.application.submit.useMutation();
  const underContract = watch("underContract");
  const currentRole = watch("role");

  useEffect(() => setValue("role", selectedRole, { shouldValidate: true }), [selectedRole, setValue]);
  useEffect(() => {
    if (submit.isSuccess) document.getElementById("apply")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [submit.isSuccess]);

  const onSubmit = (data: ApplicationInput) => submit.mutate(data);
  const startAnother = () => {
    submit.reset();
    reset({ ...defaults, role: currentRole });
  };

  return (
    <section className="application-section section-pad" id="apply">
      <div className="application-intro">
        <Reveal>
          <p className="eyebrow">Application form</p>
          <h2>Tell me about <em>yourself.</em></h2>
        </Reveal>
        <Reveal delay={.08}>
          <p>To proceed with your application, kindly provide the following details. Your selected position is already filled in below.</p>
          <div className="application-note"><Check size={18} /><span>Applications for nanny, housekeeper and driver are welcome.</span></div>
        </Reveal>
      </div>
      <Reveal className="form-wrap" delay={.1}>
        {submit.data ? (
          <motion.div className="form-success" initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} role="status">
            <span className="success-mark"><Check /></span>
            <p className="eyebrow">Application received</p>
            <h3>Thank you, {submit.data && watch("fullName").split(" ")[0]}.</h3>
            <p>Your application for the {roles[currentRole].name.toLowerCase()} position has been submitted successfully. Keep this reference for your records:</p>
            <strong className="reference-number">{submit.data.reference}</strong>
            <p>Further details regarding the recruitment process will be provided as your application progresses.</p>
            <button className="text-button" onClick={startAnother}><RotateCcw size={17} /> Submit another application</button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="form-role-banner">
              <span>Applying for</span>
              <div className="role-options" role="group" aria-label="Position applying for">
                {Object.values(roles).map((role) => <label key={role.key} className={currentRole === role.key ? "active" : ""}><input type="radio" value={role.key} {...register("role")} /><span>{role.name}</span></label>)}
              </div>
            </div>
            <div className="form-grid">
              <Field label="First and last name" error={errors.fullName?.message} wide><input {...register("fullName")} placeholder="Your full name" autoComplete="name" /></Field>
              <Field label="Age" error={errors.age?.message}><input type="number" min="18" max="80" {...register("age", { valueAsNumber: true })} /></Field>
              <Field label="Do you have a valid passport?" error={errors.hasPassport?.message}><select {...register("hasPassport")}><option value="yes">Yes</option><option value="no">No</option></select></Field>
              <Field label="Current occupation" error={errors.currentOccupation?.message}><input {...register("currentOccupation")} placeholder="Your current role" /></Field>
              <Field label="Years of experience in this role" error={errors.experienceYears?.message}><input type="number" min="0" max="60" {...register("experienceYears", { valueAsNumber: true })} /></Field>
              <Field label="Are you currently under a work contract?" error={errors.underContract?.message}><select {...register("underContract")}><option value="no">No</option><option value="yes">Yes</option></select></Field>
              {underContract === "yes" && <Field label="Time remaining on your contract" error={errors.contractTimeRemaining?.message}><input {...register("contractTimeRemaining")} placeholder="For example, 6 months" /></Field>}
              <Field label="Current salary" error={errors.currentSalary?.message}><input {...register("currentSalary")} placeholder="Amount and currency" /></Field>
              <Field label="Gender" error={errors.gender?.message}><input {...register("gender")} placeholder="Your gender" /></Field>
              <Field label="What country are you from?" error={errors.country?.message}><input {...register("country")} autoComplete="country-name" placeholder="Your country" /></Field>
            </div>
            {submit.error && <p className="form-error" role="alert">We couldn’t submit your application. Please check your connection and try again.</p>}
            <div className="form-submit">
              <p>By submitting, you confirm that the information provided is accurate.</p>
              <button type="submit" className="primary-button" disabled={submit.isPending}>{submit.isPending ? <><Loader2 className="spin" /> Submitting…</> : <>Submit application <ArrowRight /></>}</button>
            </div>
          </form>
        )}
      </Reveal>
    </section>
  );
}

function Field({ label, error, wide = false, children }: { label: string; error?: string; wide?: boolean; children: React.ReactNode }) {
  return <label className={`form-field ${wide ? "wide" : ""} ${error ? "has-error" : ""}`}><span>{label}</span>{children}{error && <small role="alert">{error}</small>}</label>;
}
