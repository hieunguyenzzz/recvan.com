import Button from '@components/UI/Button'
import FormControl from '@components/UI/Form/FormControl'
import React from 'react'

export default function FormSell() {
  return (
    <div className="container py-6">
      <div className="mx-auto max-w-screen-lg leading-snug text-black text-opacity-[0.54] prose-h2:mb-2 prose-h2:text-3xl prose-h2:leading-normal prose-h2:tracking-[0.05em] prose-h2:text-black prose-h2:text-opacity-80 prose-h4:mt-5 prose-h4:mb-0 prose-h4:text-2xl prose-h4:uppercase prose-h4:text-black prose-h4:text-opacity-80 prose-p:mb-4 prose-a:text-primary prose-a:underline md:prose-h2:text-[2.75rem] md:prose-h2:leading-tight md:prose-h4:text-3xl">
        <h2>
          <span>SELL YOUR ADVENTURE VAN</span>
        </h2>
        <div className="">
          <div className="">
            <p>
              Rec Van bus factory modified adventure vans and camper vans! When
              it comes time to take a new direction, give Rec Van the
              opportunity to buy your adventure van for cash! Our system makes
              it easy We handle all or the DMV paperwork, paying oft any
              existing loan balance and even sending a Rec Van team member to
              pick up your van. We'll provide a transparent price as to how re
              will purcha our van for and provide certified funds at pavoff.
            </p>
            <p>
              Contact us at <a href="tel:8334840348">833-484-0348</a>
            </p>{' '}
            or fill out this form to receive a auick auote.
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
            <h4 className="mb-0 col-span-full">VEHICLE INFORMATION</h4>
            <div className="col-span-full sm:col-span-6 md:col-span-4">
              <FormControl
                label="Year"
                required
                inputProps={{
                  type: 'text',
                }}
              />
            </div>
            <div className="col-span-full sm:col-span-6 md:col-span-4">
              <FormControl
                label="Make"
                required
                inputProps={{
                  type: 'text',
                }}
              />
            </div>
            <div className="col-span-full sm:col-span-6 md:col-span-4">
              <FormControl
                label="Model"
                required
                inputProps={{
                  type: 'text',
                }}
              />
            </div>
            <div className="col-span-full sm:col-span-6">
              <FormControl
                label="Mileage"
                required
                inputProps={{
                  type: 'text',
                }}
              />
            </div>
            <h4 className="mb-0 col-span-full">Contact Information</h4>
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
            <div className="col-span-full sm:col-span-6">
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
            <div className="col-span-full sm:col-span-6 ">
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
            <div className="col-span-full sm:col-span-6">
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
            <div className="col-span-full sm:col-span-6">
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
            <h4 className="mb-0 col-span-full">PREFERRED METHOD OF CONTACT</h4>
            <div className="col-span-4">
              <label className="flex items-baseline gap-1">
                Email
                <input type={'checkbox'} defaultChecked />
              </label>
            </div>
            <div className="col-span-4">
              <label className="flex items-baseline gap-1">
                Phone
                <input type={'checkbox'} />
              </label>
            </div>
            <div className="col-span-4">
              <label className="flex items-baseline gap-1">
                Text
                <input type={'checkbox'} />
              </label>
            </div>
            <div className="my-3 col-span-full">
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
