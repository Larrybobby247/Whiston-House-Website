
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { ArrowRight, Check, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  applicationInput,
  type ApplicationInput,
} from "@contracts/application";
import { roles, type RoleKey } from "../data";
import { Reveal } from "./Reveal";

// Replace with your WhatsApp number.
// Use international format without + or leading zero.
const WHATSAPP_NUMBER = "447402405471";

const defaults: ApplicationInput = {
  fullName: "",
  age: 18,
  hasPassport: "yes",
  currentOccupation: "",
  role: "nanny",
  experienceYears: 0,
  underContract: "no",
  contractTimeRemaining: "",
  currentSalary: "",
  gender: "",
  country: "",
};

export function ApplicationForm({
  selectedRole = "nanny",
}: {
  selectedRole?: RoleKey;
}) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ApplicationInput>({
    resolver: zodResolver(applicationInput),
    defaultValues: { ...defaults, role: selectedRole },
  });

  const [submittedData, setSubmittedData] =
    useState<ApplicationInput | null>(null);

  const underContract = watch("underContract");
  const currentRole = watch("role");

  useEffect(() => {
    setValue("role", selectedRole, { shouldValidate: true });
  }, [selectedRole, setValue]);

  useEffect(() => {
    if (submittedData) {
      document
        .getElementById("apply")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [submittedData]);

  const onSubmit = (data: ApplicationInput) => {
    setSubmittedData(data);
  };

  const sendToWhatsApp = (data: ApplicationInput) => {
    const message = `
Hello, I would like to apply for the ${roles[data.role].name} position.

APPLICATION DETAILS

Full Name: ${data.fullName}
Age: ${data.age}
Valid Passport: ${data.hasPassport}
Current Occupation: ${data.currentOccupation}
Years of Experience: ${data.experienceYears}
Under Work Contract: ${data.underContract}
Contract Time Remaining: ${data.contractTimeRemaining || "N/A"}
Current Salary: ${data.currentSalary}
Gender: ${data.gender}
Country: ${data.country}

I confirm that the information provided above is accurate.

Thank you.
    `.trim();

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  const startAnother = () => {
    setSubmittedData(null);
    reset({ ...defaults, role: currentRole });
  };

  return (
    <section className="application-section section-pad" id="apply">
      <div className="application-intro">
        <Reveal>
          <p className="eyebrow">Application form</p>
          <h2>
            Tell me about <em>yourself.</em>
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p>
            To proceed with your application, kindly provide the following
            details. Your selected position is already filled in below.
          </p>

          <p className="form-error">
            I would like to inform you that you will be responsible for the
            cost of your work visa application fee, which costs 150 Pounds
            (12,000 PHP) by your currency. As the employer, I will cover the
            cost of your flight ticket, which costs me almost 1,300 Pounds,
            as well as other expenses related to your relocation, including
            medical examinations and any additional required documentation.

            Please note that salary deductions are not permitted, and no
            deductions will be made from your salary for any expenses covered
            by me.
          </p>

          <div className="application-note">
            <Check size={18} />
            <span>
              Applications for nanny, housekeeper and driver are welcome.
            </span>
          </div>
        </Reveal>
      </div>

      <Reveal className="form-wrap" delay={0.1}>
        {submittedData ? (
          <motion.div
            className="form-success"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            role="status"
          >
            <span className="success-mark">
              <Check />
            </span>

            <p className="eyebrow">Application ready</p>

            <h3>
              Thank you, {submittedData.fullName.split(" ")[0]}.
            </h3>

            <p>
              Your application details are ready. Click the button below
              to open WhatsApp and send your application directly.
            </p>

            <button
              type="button"
              className="primary-button"
              onClick={() => sendToWhatsApp(submittedData)}
            >
              Send application on WhatsApp <ArrowRight />
            </button>

            <button
              type="button"
              className="text-button"
              onClick={startAnother}
            >
              <RotateCcw size={17} />
              Submit another application
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="form-role-banner">
              <span>Applying for</span>

              <div
                className="role-options"
                role="group"
                aria-label="Position applying for"
              >
                {Object.values(roles).map((role) => (
                  <label
                    key={role.key}
                    className={
                      currentRole === role.key ? "active" : ""
                    }
                  >
                    <input
                      type="radio"
                      value={role.key}
                      {...register("role")}
                    />
                    <span>{role.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="form-grid">
              <Field
                label="First and last name"
                error={errors.fullName?.message}
                wide
              >
                <input
                  {...register("fullName")}
                  placeholder="Your full name"
                  autoComplete="name"
                />
              </Field>

              <Field label="Age" error={errors.age?.message}>
                <input
                  type="number"
                  min="18"
                  max="80"
                  {...register("age", { valueAsNumber: true })}
                />
              </Field>

              <Field
                label="Do you have a valid passport?"
                error={errors.hasPassport?.message}
              >
                <select {...register("hasPassport")}>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </Field>

              <Field
                label="Current occupation"
                error={errors.currentOccupation?.message}
              >
                <input
                  {...register("currentOccupation")}
                  placeholder="Your current role"
                />
              </Field>

              <Field
                label="Years of experience in this role"
                error={errors.experienceYears?.message}
              >
                <input
                  type="number"
                  min="0"
                  max="60"
                  {...register("experienceYears", {
                    valueAsNumber: true,
                  })}
                />
              </Field>

              <Field
                label="Are you currently under a work contract?"
                error={errors.underContract?.message}
              >
                <select {...register("underContract")}>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </Field>

              {underContract === "yes" && (
                <Field
                  label="Time remaining on your contract"
                  error={errors.contractTimeRemaining?.message}
                >
                  <input
                    {...register("contractTimeRemaining")}
                    placeholder="For example, 6 months"
                  />
                </Field>
              )}

              <Field
                label="Current salary"
                error={errors.currentSalary?.message}
              >
                <input
                  {...register("currentSalary")}
                  placeholder="Amount and currency"
                />
              </Field>

              <Field
                label="Gender"
                error={errors.gender?.message}
              >
                <input
                  {...register("gender")}
                  placeholder="Your gender"
                />
              </Field>

              <Field
                label="What country are you from?"
                error={errors.country?.message}
              >
                <input
                  {...register("country")}
                  autoComplete="country-name"
                  placeholder="Your country"
                />
              </Field>
            </div>

            <div className="form-submit">
              <p>
                By submitting, you confirm that the information
                provided is accurate.
              </p>

              <button
                type="submit"
                className="primary-button"
              >
                Continue to WhatsApp <ArrowRight />
              </button>
            </div>
          </form>
        )}
      </Reveal>
    </section>
  );
}

function Field({
  label,
  error,
  wide = false,
  children,
}: {
  label: string;
  error?: string;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label
      className={`form-field ${wide ? "wide" : ""} ${
        error ? "has-error" : ""
      }`}
    >
      <span>{label}</span>
      {children}
      {error && <small role="alert">{error}</small>}
    </label>
  );
}
