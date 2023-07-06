import { useState } from 'react';
import { useForm } from 'react-hook-form';

import AssignActions from '../AsignActions';

import Spinner from '@/components/common/Spinner';
import Button from '@/components/form/Button';
import InputText from '@/components/form/InputText';
import Select from '@/components/form/Select';
import { CreateTaskProps } from '@/src/adapters/task';
import { Task } from '@/src/types/task';

type CreateTaskFormProps = {
  onSubmit: (props: CreateTaskProps) => void;
  loading: boolean;
};

const CreateTaskForm = ({
  onSubmit,
  loading,
}: CreateTaskFormProps): React.ReactElement => {
  const { register, handleSubmit } = useForm<Task>();
  const [labelled, setLabelled] = useState('');

  const submitHandler = (props: Task): void => {
    onSubmit({ ...props, label: labelled || 'task' });
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className={`p-8 ${loading && 'pointer-events-none opacity-50'}`}
    >
      <div className="relative overflow-hiddens rounded-lg border border-gray-300 shadow-sm focus-within:border-sky-500 focus-within:ring-1 focus-within:ring-sky-500">
        <label htmlFor="title" className="sr-only">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="block w-full border-0 pt-2.5 text-lg font-medium placeholder:text-gray-400 focus:ring-0"
          placeholder="Title"
          {...register('title', { required: true })}
        />
        <label htmlFor="note" className="sr-only">
          Description
        </label>
        <textarea
          rows={2}
          id="note"
          className="block w-full resize-none border-0 py-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          placeholder="Write a note... (optional)"
          {...register('note', { required: false })}
        />

        {/* Spacer element to match the height of the toolbar */}
        <div aria-hidden="true">
          <div className="h-px" />
          <div className="py-2">
            <div className="py-px">
              <div className="h-9" />
            </div>
          </div>
        </div>

        <div className="absolute inset-x-px bottom-0">
          <AssignActions onLabelChange={setLabelled} align="right" />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-2 ">
        <div className="col-span-1">
          <label
            htmlFor="contact_name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Contact name
          </label>
          <div className="mt-2">
            <InputText
              type="text"
              name="contact_name"
              id="contact_name"
              autoComplete="given-name"
              placeholder="e.g. John Doe"
              inputSize="sm"
              register={register('contact_name', { required: true })}
            />
          </div>
        </div>

        <div className="col-span-1">
          <label
            htmlFor="contact_number"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Contact number
          </label>
          <div className="mt-2">
            <InputText
              type="text"
              name="contact_number"
              id="contact_number"
              autoComplete="family-name"
              placeholder="e.g. 8499782355"
              inputSize="sm"
              register={register('contact_number', { required: true })}
            />
          </div>
        </div>

        <div className="col-span-1">
          <label
            htmlFor="country"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Job type
          </label>
          <div className="mt-2">
            <Select
              id="task_type"
              name="task_type"
              inputSize="sm"
              register={register('task_type', { required: true })}
              placeholder="select job type"
              defaultValue=""
            >
              <option key={0} value="">
                Select job type
              </option>
              <option value="roll up awning">roll up awning</option>
              <option value="sukkah">sukkah</option>
            </Select>
          </div>
        </div>
      </div>

      <div className="mt-4 text-end">
        <Button type="submit">
          {loading && <Spinner textColor="text-green-100" loading />} Create
        </Button>
      </div>
    </form>
  );
};

export default CreateTaskForm;
