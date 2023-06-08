import java.util.Queue;
import java.util.LinkedList;

public class JobQueue {
    private Queue<Job> queue;

    public JobQueue() {
        queue = new LinkedList<Job>();
    }

    public void addJob(Job job) {
        queue.add(job);
    }

    public void processJobs() {
        while (!queue.isEmpty()) {
            Job job = queue.remove();
            job.execute();
        }
    }

    public static void main(String[] args) {
        JobQueue jobQueue = new JobQueue();

        // Add some jobs to the queue
        jobQueue.addJob(new Job("Job 1"));
        jobQueue.addJob(new Job("Job 2"));
        jobQueue.addJob(new Job("Job 3"));

        // Process the jobs
        jobQueue.processJobs();
    }
}

class Job {
    private String name;

    public Job(String name) {
        this.name = name;
    }

    public void execute() {
        System.out.println("Executing job: " + name);
    }
}

