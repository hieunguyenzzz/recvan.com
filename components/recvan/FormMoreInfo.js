import Button from '@components/UI/Button'
import FormControl from '@components/UI/Form/FormControl'
import React from 'react'

export default function FormMoreInfo() {
  return (
    <div className="container py-6">
      <div className="mx-auto max-w-screen-lg leading-snug text-black text-opacity-[0.54] prose-h2:mb-2 prose-h2:text-3xl prose-h2:leading-normal prose-h2:tracking-[0.05em] prose-h2:text-black prose-h2:text-opacity-80 prose-h4:mt-5 prose-h4:mb-2 prose-h4:text-2xl prose-h4:uppercase prose-h4:text-black prose-h4:text-opacity-80 prose-p:mb-4 prose-a:text-primary prose-a:underline md:prose-h2:text-[2.75rem] md:prose-h2:leading-tight md:prose-h4:text-3xl">
        <h2>
          <span>More Info for 2017 Roadtrek RS ETREK DP160171</span>
        </h2>
        <div className="clearfix">
          <div className="quick-quote-text">
            <span style={{ fontWeight: 'bold' }}>For a Quick Quote Call:</span>{' '}
            <a href="tel:8336141693">833-614-1693</a>
          </div>
        </div>
        <div className="mt-8">
          <form
            action="/RecVanSearch/Email"
            method="post"
            style={{ width: '100%' }}
            noValidate="novalidate"
            cr-attached="true"
            className="grid grid-cols-12 gap-x-8 gap-y-4"
          >
            <h4 className="col-span-full">Personal Information</h4>
            <div className="col-span-full sm:col-span-6">
              <FormControl
                label="First name"
                required
                inputProps={{
                  type: 'text',
                }}
              />
            </div>
            <div className="col-span-full sm:col-span-6">
              <FormControl
                label="Last name"
                required
                inputProps={{
                  id: 'LastName',
                  name: 'LastName',
                  type: 'text',
                }}
              />
            </div>
            <h4 className="col-span-full">Contact Information</h4>
            <div className="col-span-full sm:col-span-6 md:col-span-4 lg:col-span-3">
              <FormControl
                label="Telephone"
                inputProps={{
                  id: 'Telephone',
                  name: 'Telephone',
                  placeholder: '(000) 000-0000',
                  type: 'text',
                }}
              />
            </div>
            <div className="col-span-full sm:col-span-6 md:col-span-4 lg:col-span-3">
              <FormControl
                label="Mobile Phone"
                inputProps={{
                  id: 'MobilePhone',
                  name: 'MobilePhone',
                  placeholder: '(000) 000-0000',
                  type: 'text',
                }}
              />
            </div>
            <div className="col-span-full md:col-span-8 lg:col-span-6">
              <FormControl
                label="Email"
                required
                inputProps={{
                  id: 'Email',
                  name: 'Email',
                  type: 'text',
                }}
              />
            </div>
            <div className="col-span-full sm:col-span-6 md:col-span-4 lg:col-span-3">
              <FormControl
                label="Zip code"
                required
                inputProps={{
                  id: 'ZipCode',
                  name: 'ZipCode',
                  type: 'text',
                }}
              />
            </div>
            <div className="col-span-full">
              <FormControl
                label="Comments"
                inputProps={{
                  id: 'Comments',
                  name: 'Comments',
                  type: 'textarea',
                }}
              >
                <textarea
                  className="w-full p-3 bg-white textarea-bordered textarea"
                  cols={30}
                  id="Comments"
                  name="Comments"
                  rows={6}
                  defaultValue={''}
                />
              </FormControl>
            </div>

            <div className="col-span-full">
              <div>
                <span className="text-error">*</span> - Indicates a required
                field
              </div>
            </div>
            <div className="col-span-full">
              <Button shape={'wide'} color="primary">
                {(props) => (
                  <input type="submit" defaultValue="Submit" {...props} />
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
