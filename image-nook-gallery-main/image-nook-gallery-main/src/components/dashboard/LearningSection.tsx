import { ArrowRight } from "lucide-react";
import { courses, type Course } from "@/data/dashboard";

function ViewMoreButton() {
  return (
    <button
      type="button"
      className="inline-flex h-9 items-center gap-2 rounded-lg border bg-card px-3.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
    >
      View More
      <ArrowRight className="size-4" />
    </button>
  );
}

function LearningCard({ course }: { course: Course }) {
  return (
    <article className="group overflow-hidden rounded-xl border bg-card transition-shadow hover:shadow-md">
      <div className="aspect-video overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          width={1088}
          height={608}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="space-y-2 p-3.5">
        <p className="truncate text-sm font-semibold">{course.title}</p>
        <p className="text-xs text-muted-foreground">Progress</p>
        <div className="flex items-center gap-2">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-progress"
              style={{ width: `${course.progress}%` }}
            />
          </div>
          <span className="text-xs font-semibold">{course.progress}%</span>
        </div>
        <p className="text-xs text-muted-foreground">{course.source}</p>
      </div>
    </article>
  );
}

export default function LearningSection() {
  return (
    <section>
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl font-semibold tracking-tight">
          Learning In progress
        </h3>
        <ViewMoreButton />
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {courses.map((course) => (
          <LearningCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
