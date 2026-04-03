import { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Box,
  Calendar,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  CreditCard,
  FileText,
  Loader2,
  MapPin,
  MoreHorizontal,
  Package,
  Plus,
  RefreshCw,
  RotateCcw,
  Save,
  Search,
  Settings,
  ShoppingCart,
  Truck,
  User,
  Users,
  Warehouse,
  X,
  Zap,
} from 'lucide-react'
import './App.css'

/* ──────────────────── Sample Data ──────────────────── */

const sampleOrders = [
  { error: '', opCo: 'Dorse', orderType: 'Equipment', branch: 'Seattle', orderNum: '101085', quoteNum: '101085', customerPO: '1234', oppName: '', status: 'Processing', orderDate: '04/01/2026' },
  { error: '', opCo: 'Dorse', orderType: 'Equipment', branch: 'Seattle', orderNum: '101084', quoteNum: '101084', customerPO: '1234', oppName: '', status: 'Processing', orderDate: '04/01/2026' },
  { error: '', opCo: 'Dorse', orderType: 'Equipment', branch: 'Seattle', orderNum: '101083', quoteNum: '101083', customerPO: '1231', oppName: '', status: 'Processing', orderDate: '04/01/2026' },
  { error: 'error', opCo: 'Dorse', orderType: 'Equipment', branch: 'Seattle', orderNum: '101082', quoteNum: '101082', customerPO: '1231', oppName: '', status: 'Processing', orderDate: '04/01/2026' },
  { error: 'error', opCo: 'Dorse', orderType: 'Parts', branch: 'Seattle', orderNum: 'DSE1601-26-O778-1', quoteNum: 'DSE1601-26-O778-1', customerPO: '', oppName: '', status: 'Processing', orderDate: '04/01/2026' },
  { error: '', opCo: 'Dorse', orderType: 'Parts', branch: 'Seattle', orderNum: 'DSE1601-26-O122-1', quoteNum: 'DSE1601-26-O122-1', customerPO: '', oppName: '', status: 'Processing', orderDate: '04/01/2026' },
  { error: '', opCo: 'Dorse', orderType: 'Parts', branch: 'Seattle', orderNum: 'DSE1601-26-O796-1', quoteNum: 'DSE1601-26-O796-1', customerPO: '', oppName: '', status: 'Processing', orderDate: '04/01/2026' },
  { error: '', opCo: 'Dorse', orderType: 'Parts', branch: 'Seattle', orderNum: 'DSE1601-26-O795-1', quoteNum: 'DSE1601-26-O795-1', customerPO: '', oppName: '', status: 'Processing', orderDate: '04/01/2026' },
]

const orderData = {
  orderNumber: 'DSE1601-26-O93-1',
  quoteNumber: 'DSE1601-26-O93-1',
  customerName: 'Tyson Foods Springdale',
  customerId: '3199',
  billTo: 'Po Box 2020',
  shipTo: 'Po Box 2020',
  paymentTerms: '10 Net',
  opportunityName: '',
  opportunityNumber: '',
  hold: false,
  createdBy: 'Bhava Vemuru',
  lastUpdatedBy: 'Bhava Vemuru',
  pmPhase: 'Fully Paid',
  revision: '1',
  requestDate: '03/31/2026',
  salesRep: 'Bhava Vemuru',
  contactName: 'Fran Ap',
  email: '',
  contactPhone: '8006433410',
  warehouse: '',
  supplier: '',
  supplierSite: '',
  currency: 'USD',
  creationDate: '03/31/2026',
  lastUpdatedDate: '03/31/2026',
  orderDate: '03/31/2026',
  opCo: 'Dorse',
  branch: 'Seattle',
  lob: 'Parts',
  orderType: 'Parts',
  shippingMethod: '',
  paymentMethod: '',
  orderAmt: '$15.38',
  tax: '$0.00',
  totalAmt: '$15.38',
  customerPO: '',
  customerPOAmt: '',
  orderRep: '',
  orderStatus: 'Processing',
  autoScheduling: true,
  dropShip: false,
}

const lineItems = [
  {
    selected: true,
    hold: false,
    line: 1,
    lineType: 'Buy',
    fulfillmentStatus: '',
    itemNumber: 'Greenheck - SG42S',
    description: 'Steel Sidewall Register w/OBD sur 1601DSEPA',
    coveredItem: '',
    customDescription: '',
    qty: 1,
    uom: '',
    onHand: 0,
    available: 50,
    unitCost: 50,
    marginPct: 0,
    unitPrice: 10,
    totalCost: 50.00,
    totalPrice: 10.00,
    totalMarginAmt: -40.00,
    totalMarginPct: 0,
    warehouse: '',
    supplier: '',
    supplierSite: '',
    requestedDate: '03/31/2026',
    scheduleShipDate: '03/31/2026',
    shipTo: 'Po Box 2020',
  },
]

const additionalData = {
  testBalance: '',
  orderWriter: 'Bhava Vemuru',
  ownerInvolved: null,
  taxExempt: null,
  ownerDriven: null,
  specificationStrength: '',
  designEngineer: '',
  contactEngineer: '',
  leadNumber: '',
  taxExemptReceived: null,
  salesRepOwner: 'Bhava Vemuru',
  engineer: '',
  estimator: '',
  taxExemptCertificate: '',
  shippingInstructions: '',
}

/* ──────────────────── Reusable Components ──────────────────── */

function Section({ icon, iconColor, title, subtitle, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="section-card">
      <div className="section-header" onClick={() => setOpen(!open)}>
        <div className="section-header-left">
          <div className={`section-icon ${iconColor}`}>{icon}</div>
          <div>
            <div className="section-title">{title}</div>
            {subtitle && <div className="section-subtitle">{subtitle}</div>}
          </div>
        </div>
        <ChevronDown size={18} className={`chevron ${open ? 'open' : ''}`} />
      </div>
      {open && <div className="section-body">{children}</div>}
    </div>
  )
}

function Field({ label, value, editable, searchable, wide, required }) {
  return (
    <div className={`form-group ${wide ? 'span-2' : ''}`}>
      <label className="form-label">
        {required && <span className="required">*</span>}
        {label}
      </label>
      <div className={`form-value ${editable ? 'editable' : ''}`}>
        <div className="form-value-with-icon">
          <span>{value || '\u2014'}</span>
          {searchable && <Search size={14} className="search-icon" />}
        </div>
      </div>
    </div>
  )
}

function InputField({ label, placeholder, type = 'text', required, searchable }) {
  return (
    <div className="form-group">
      <label className="form-label">
        {required && <span className="required">*</span>}
        {label}
      </label>
      <div className="input-wrapper">
        <input type={type} className="form-input" placeholder={placeholder || ''} />
        {searchable && <Search size={14} className="input-icon" />}
      </div>
    </div>
  )
}

function SelectField({ label, options = [], defaultValue, required }) {
  return (
    <div className="form-group">
      <label className="form-label">
        {required && <span className="required">*</span>}
        {label}
      </label>
      <select className="form-select" defaultValue={defaultValue || ''}>
        <option value="">Select...</option>
        {options.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  )
}

function RadioField({ label, value }) {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <div className="radio-group">
        <label className="radio-label">
          <span className={`radio-custom ${value === true ? 'selected' : ''}`} />
          Yes
        </label>
        <label className="radio-label">
          <span className={`radio-custom ${value === false ? 'selected' : ''}`} />
          No
        </label>
      </div>
    </div>
  )
}

function Toggle({ label, checked }) {
  const [on, setOn] = useState(checked)
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <div className="toggle-wrapper" onClick={() => setOn(!on)}>
        <div className={`toggle-track ${on ? 'on' : ''}`}>
          <div className="toggle-thumb" />
        </div>
        <span className="toggle-label">{on ? 'On' : 'Off'}</span>
      </div>
    </div>
  )
}

function Modal({ open, onClose, title, children }) {
  if (!open) return null
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button className="btn btn-icon btn-ghost" onClick={onClose}>
            <X size={18} />
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  )
}

/* ──────────────────── Search Page ──────────────────── */

function SearchPage({ onOpenOrder, onCreateNew }) {
  const [searched, setSearched] = useState(false)
  const [searching, setSearching] = useState(false)

  const handleSearch = () => {
    setSearching(true)
    setTimeout(() => {
      setSearching(false)
      setSearched(true)
    }, 800)
  }

  return (
    <div className="app-container">
      {/* Header Bar */}
      <div className="search-page-header">
        <div className="brand">
          <Zap size={22} className="brand-icon" />
          <span className="brand-name">LIGHTSPEED</span>
          <span className="brand-divider" />
          <span className="brand-product">OMS</span>
        </div>
      </div>

      {/* Search Form */}
      <div className="section-card">
        <div className="section-header" style={{ cursor: 'default' }}>
          <div className="section-header-left">
            <div className="section-icon blue"><Search size={16} /></div>
            <div>
              <div className="section-title">Order Search</div>
              <div className="section-subtitle">Find orders by any criteria</div>
            </div>
          </div>
        </div>
        <div className="section-body">
          <div className="form-grid form-grid-2">
            <SelectField label="OpCo" required options={[{ value: 'Dorse', label: 'Dorse' }]} defaultValue="Dorse" />
            <SelectField label="Order Type" options={[{ value: 'Equipment', label: 'Equipment' }, { value: 'Parts', label: 'Parts' }]} />
            <InputField label="Customer Name" searchable />
            <InputField label="Customer Number" />
            <InputField label="Order #" />
            <InputField label="Quote #" />
            <SelectField label="Order Rep" required options={[]} />
            <SelectField label="Sales Person" options={[]} />
            <InputField label="Customer PO #" />
            <InputField label="Opportunity Name" searchable />
            <InputField label="Order From" type="date" />
            <InputField label="Order To" type="date" />
            <SelectField label="Branch" options={[{ value: 'Seattle', label: 'Seattle' }]} />
            <div className="form-group">
              <label className="form-label">&nbsp;</label>
              <label className="checkbox-label" style={{ paddingTop: 8 }}>
                <span className="checkbox-custom" />
                Include Closed & Cancelled Orders
              </label>
            </div>
          </div>
          <div className="search-actions">
            <button className="btn btn-primary" onClick={handleSearch}>
              <Search size={15} />
              Search
            </button>
            <button className="btn">
              <RotateCcw size={15} />
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Loading Overlay */}
      {searching && (
        <div className="loading-card">
          <Loader2 size={28} className="spinner" />
          <span>Searching orders...</span>
        </div>
      )}

      {/* Results Table */}
      {searched && !searching && (
        <div className="table-card" style={{ marginTop: 20 }}>
          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Error</th>
                  <th>OpCo</th>
                  <th>Order Type</th>
                  <th>Branch</th>
                  <th>Order #</th>
                  <th>Status</th>
                  <th>Order Date</th>
                  <th>Quote #</th>
                  <th>Customer PO #</th>
                  <th>Opportunity Name</th>
                </tr>
              </thead>
              <tbody>
                {sampleOrders.map((o, i) => (
                  <tr key={i} className="clickable-row" onClick={() => onOpenOrder()}>
                    <td>
                      {o.error && <span className="error-dot" title="Error" />}
                    </td>
                    <td>{o.opCo}</td>
                    <td>
                      <span className={`order-type-badge ${o.orderType === 'Equipment' ? 'equipment' : 'parts'}`}>
                        {o.orderType}
                      </span>
                    </td>
                    <td>{o.branch}</td>
                    <td className="td-link">{o.orderNum}</td>
                    <td>
                      <span className="status-badge status-processing">
                        <span className="status-dot" />
                        {o.status}
                      </span>
                    </td>
                    <td className="td-date">{o.orderDate}</td>
                    <td>{o.quoteNum}</td>
                    <td>{o.customerPO || '\u2014'}</td>
                    <td>{o.oppName || '\u2014'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="table-footer">
            <div className="table-pagination">
              <button className="btn btn-icon" disabled>
                <ChevronLeft size={16} />
              </button>
              <span className="pagination-info">Page 1</span>
              <button className="btn btn-icon">
                <ChevronRight size={16} />
              </button>
              <span className="table-footer-info">Total Order Count: <strong>613</strong></span>
            </div>
            <div className="table-footer-actions">
              <button className="btn" onClick={onCreateNew}>
                <Plus size={15} />
                Create New Order
              </button>
              <button className="btn btn-primary" onClick={onOpenOrder}>
                Open Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

/* ──────────────────── Order Detail Page ──────────────────── */

function OrderDetailPage({ onBack, isNew = false }) {
  const [activeTab, setActiveTab] = useState('details')
  const [activeLineTab, setActiveLineTab] = useState('lines')
  const [productModalOpen, setProductModalOpen] = useState(false)
  const [productSearch, setProductSearch] = useState('')

  const data = isNew ? {} : orderData

  return (
    <div className="app-container">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-left">
          <button className="btn btn-ghost" onClick={onBack}>
            <ArrowLeft size={16} />
            Back to Search
          </button>
        </div>
        <div className="top-bar-right">
          {!isNew && (
            <button className="btn">
              <ClipboardList size={15} />
              Pick Details
            </button>
          )}
          <button className="btn btn-primary" onClick={onBack}>
            <Plus size={15} />
            Create New Order
          </button>
          <button className="btn btn-icon btn-ghost">
            <MoreHorizontal size={18} />
          </button>
        </div>
      </div>

      {/* Order Title Area */}
      {!isNew ? (
        <div className="order-title-area">
          <div className="order-title-left">
            <div className="order-icon">
              <FileText size={22} />
            </div>
            <div className="order-title">
              <h1>{data.orderNumber}</h1>
              <div className="order-meta">
                <span>{data.customerName}</span>
                <span className="separator" />
                <span>Customer # {data.customerId}</span>
                <span className="separator" />
                <span className="status-badge status-processing">
                  <span className="status-dot" />
                  {data.orderStatus}
                </span>
                <span className="status-badge status-paid">
                  <span className="status-dot" />
                  {data.pmPhase}
                </span>
              </div>
            </div>
          </div>
          <div className="order-summary-cards">
            <div className="summary-card">
              <div className="label">Order Amt</div>
              <div className="value">{data.orderAmt}</div>
            </div>
            <div className="summary-card">
              <div className="label">Tax</div>
              <div className="value">{data.tax}</div>
            </div>
            <div className="summary-card">
              <div className="label">Total</div>
              <div className="value highlight">{data.totalAmt}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="order-title-area">
          <div className="order-title-left">
            <div className="order-icon" style={{ background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)' }}>
              <Plus size={22} style={{ color: '#10b981' }} />
            </div>
            <div className="order-title">
              <h1>Create New Order</h1>
              <div className="order-meta">
                <span>Fill in the order details below</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="tabs-container">
        <button className={`tab ${activeTab === 'details' ? 'active' : ''}`} onClick={() => setActiveTab('details')}>
          <FileText size={14} />
          Order Header
        </button>
        <button className={`tab ${activeTab === 'attributes' ? 'active' : ''}`} onClick={() => setActiveTab('attributes')}>
          <Settings size={14} />
          Additional Attributes
        </button>
        <button className={`tab ${activeTab === 'payment' ? 'active' : ''}`} onClick={() => setActiveTab('payment')}>
          <CreditCard size={14} />
          Payment Details
        </button>
      </div>

      {/* Order Header Tab */}
      {activeTab === 'details' && (
        <>
          <Section icon={<Package size={16} />} iconColor="blue" title="Order Information" subtitle="Core order identifiers and dates">
            <div className="form-grid">
              {isNew ? (
                <>
                  <InputField label="Order #" />
                  <InputField label="Quote #" />
                  <InputField label="Revision #" />
                  <InputField label="Order Date" type="date" />
                  <InputField label="Request Date" type="date" />
                  <SelectField label="OpCo" required options={[{ value: 'Dorse', label: 'Dorse' }]} />
                  <SelectField label="Branch" options={[{ value: 'Seattle', label: 'Seattle' }]} />
                  <SelectField label="Order Type" options={[{ value: 'Equipment', label: 'Equipment' }, { value: 'Parts', label: 'Parts' }]} />
                  <SelectField label="Shipping Method" options={[]} />
                  <InputField label="Order Amount" />
                  <InputField label="Tax" />
                  <InputField label="Total Order Amount" />
                </>
              ) : (
                <>
                  <Field label="Order #" value={data.orderNumber} />
                  <Field label="Quote #" value={data.quoteNumber} />
                  <Field label="Revision #" value={data.revision} />
                  <Field label="Order Date" value={data.orderDate} />
                  <Field label="Request Date" value={data.requestDate} editable />
                  <Field label="Creation Date" value={data.creationDate} />
                  <Field label="Last Updated Date" value={data.lastUpdatedDate} />
                  <Field label="OpCo" value={data.opCo} required />
                  <Field label="Branch" value={data.branch} />
                  <Field label="LOB" value={data.lob} />
                  <Field label="Order Type" value={data.orderType} />
                  <Field label="Currency" value={data.currency} />
                  <Field label="Order Status" value={data.orderStatus} />
                </>
              )}
            </div>
          </Section>

          <Section icon={<User size={16} />} iconColor="green" title="Customer & Contact" subtitle="Customer information and contacts">
            <div className="form-grid">
              {isNew ? (
                <>
                  <InputField label="Customer #" />
                  <InputField label="Customer Name" required searchable />
                  <InputField label="Contact Name" />
                  <SelectField label="Sales Rep" options={[]} />
                  <InputField label="Email" />
                  <InputField label="Contact Phone" />
                  <InputField label="Bill To" searchable />
                  <InputField label="Ship To" searchable />
                  <SelectField label="Payment Terms" options={[]} />
                </>
              ) : (
                <>
                  <Field label="Customer Name" value={data.customerName} searchable required />
                  <Field label="Customer #" value={data.customerId} />
                  <Field label="Contact Name" value={data.contactName} />
                  <Field label="Sales Rep" value={data.salesRep} />
                  <Field label="Contact Phone" value={data.contactPhone} />
                  <Field label="Email" value={data.email} editable />
                  <Field label="Bill To" value={data.billTo} searchable />
                  <Field label="Ship To" value={data.shipTo} searchable />
                  <Field label="Payment Terms" value={data.paymentTerms} />
                </>
              )}
            </div>
          </Section>

          <Section icon={<Truck size={16} />} iconColor="amber" title="Shipping & Supplier" subtitle="Logistics and supplier details">
            <div className="form-grid">
              {isNew ? (
                <>
                  <SelectField label="Shipping Method" options={[]} />
                  <SelectField label="Warehouse" options={[]} />
                  <InputField label="Supplier" searchable />
                  <InputField label="Supplier Site" />
                  <SelectField label="Currency" options={[{ value: 'USD', label: 'USD' }]} />
                  <InputField label="Customer PO #" />
                  <InputField label="Customer PO Amount" />
                </>
              ) : (
                <>
                  <Field label="Shipping Method" value={data.shippingMethod} editable />
                  <Field label="Warehouse" value={data.warehouse} editable />
                  <Field label="Supplier" value={data.supplier} searchable editable />
                  <Field label="Supplier Site" value={data.supplierSite} searchable editable />
                  <Field label="Customer PO #" value={data.customerPO} editable />
                  <Field label="Customer PO Amt" value={data.customerPOAmt} editable />
                </>
              )}
            </div>
          </Section>

          <Section icon={<Users size={16} />} iconColor="purple" title="Internal Tracking" subtitle="Opportunity, audit trail and settings">
            <div className="form-grid">
              {isNew ? (
                <>
                  <InputField label="Opportunity Name" searchable />
                  <InputField label="Opportunity #" />
                  <SelectField label="Order Rep" required options={[]} />
                  <Field label="Created By" value="Dinesh Wankhede" />
                  <Field label="Last Updated By" value="Dinesh Wankhede" />
                  <SelectField label="PM Phase" options={[]} />
                  <SelectField label="Payment Method" options={[]} />
                  <Toggle label="Auto Scheduling" checked={true} />
                  <Toggle label="Drop-Ship" checked={false} />
                </>
              ) : (
                <>
                  <Field label="Opportunity Name" value={data.opportunityName} editable />
                  <Field label="Opportunity #" value={data.opportunityNumber} editable />
                  <Field label="Order Rep" value={data.orderRep} editable required />
                  <Field label="Created By" value={data.createdBy} />
                  <Field label="Last Updated By" value={data.lastUpdatedBy} />
                  <Field label="PM Phase" value={data.pmPhase} />
                  <Field label="Payment Method" value={data.paymentMethod} editable />
                  <Toggle label="Auto Scheduling" checked={data.autoScheduling} />
                  <Toggle label="Drop-Ship" checked={data.dropShip} />
                </>
              )}
            </div>
          </Section>
        </>
      )}

      {/* Additional Attributes Tab */}
      {activeTab === 'attributes' && (
        <Section icon={<Settings size={16} />} iconColor="purple" title="Additional Attributes" subtitle="Extended order properties and assignments">
          <div className="form-grid">
            {isNew ? (
              <>
                <InputField label="Test & Balance" />
                <InputField label="Design Engineer" />
                <SelectField label="Sales Rep / Account Owner (From CPQ)" options={[]} />
                <SelectField label="Order Writer (From CPQ)" options={[]} />
                <InputField label="Contact Engineer" />
                <SelectField label="Engineer" options={[]} />
                <div className="form-divider" />
                <RadioField label="Owner Involved" value={null} />
                <RadioField label="Tax Exempt" value={null} />
                <RadioField label="Owner Driven" value={null} />
                <SelectField label="Lead #" options={[]} />
                <RadioField label="Tax Exempt Received" value={null} />
                <SelectField label="Estimator" options={[]} />
                <InputField label="Specification Strength" />
                <InputField label="Tax Exempt Certificate" />
                <InputField label="Shipping Instructions" />
              </>
            ) : (
              <>
                <Field label="Test & Balance" value={additionalData.testBalance} editable />
                <Field label="Design Engineer" value={additionalData.designEngineer} editable />
                <Field label="Sales Rep / Account Owner (From CPQ)" value={additionalData.salesRepOwner} />
                <Field label="Order Writer (From CPQ)" value={additionalData.orderWriter} />
                <Field label="Contact Engineer" value={additionalData.contactEngineer} editable />
                <Field label="Engineer" value={additionalData.engineer} editable />
                <div className="form-divider" />
                <RadioField label="Owner Involved" value={additionalData.ownerInvolved} />
                <RadioField label="Tax Exempt" value={additionalData.taxExempt} />
                <RadioField label="Owner Driven" value={additionalData.ownerDriven} />
                <Field label="Lead #" value={additionalData.leadNumber} editable />
                <RadioField label="Tax Exempt Received" value={additionalData.taxExemptReceived} />
                <Field label="Estimator" value={additionalData.estimator} editable />
                <Field label="Specification Strength" value={additionalData.specificationStrength} editable />
                <Field label="Tax Exempt Certificate" value={additionalData.taxExemptCertificate} editable />
                <Field label="Shipping Instructions" value={additionalData.shippingInstructions} editable />
              </>
            )}
          </div>
        </Section>
      )}

      {/* Payment Details Tab */}
      {activeTab === 'payment' && (
        <Section icon={<CreditCard size={16} />} iconColor="green" title="Payment Details" subtitle="Payment method and billing information">
          <div className="form-grid">
            <SelectField label="Payment Type" options={[{ value: 'credit', label: 'Credit Card' }, { value: 'ach', label: 'ACH' }, { value: 'wire', label: 'Wire Transfer' }, { value: 'check', label: 'Check' }]} />
            <div className="form-group">
              <label className="form-label">Email Receipt</label>
              <div style={{ padding: '8px 0' }}>
                <label className="checkbox-label">
                  <span className="checkbox-custom" />
                  Send email receipt to customer
                </label>
              </div>
            </div>
            <InputField label="Email Address" type="email" placeholder="Enter email address..." />
          </div>
        </Section>
      )}

      {/* ── Line Items Section ── */}
      <div className="line-items-section">
        <div className="action-bar">
          <div className="action-bar-left">
            <button className="btn btn-primary" onClick={() => setProductModalOpen(true)}>
              <ShoppingCart size={15} />
              Add Products
            </button>
            <button className="btn">
              <MapPin size={15} />
              Create/Update Ship To
            </button>
            <button className="btn">
              <Warehouse size={15} />
              Update Warehouse
            </button>
            <button className="btn">
              <Box size={15} />
              Update Supplier
            </button>
            <button className="btn btn-ghost">
              <MoreHorizontal size={16} />
              More Actions
            </button>
          </div>
          <div className="action-bar-right">
            <button className="btn">
              <RefreshCw size={15} />
              Refresh Screen
            </button>
            <button className="btn">
              <Calendar size={15} />
              Schedule Lines
            </button>
          </div>
        </div>

        {/* Line Item Tabs */}
        <div className="tabs-container">
          {[
            { id: 'lines', label: 'Line Details' },
            { id: 'supply', label: 'Supply Details' },
            { id: 'line-attributes', label: 'Additional Attributes' },
            { id: 'rma', label: 'Return Order Details' },
          ].map(tab => (
            <button
              key={tab.id}
              className={`tab ${activeLineTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveLineTab(tab.id)}
            >
              {tab.label}
              {tab.id === 'lines' && lineItems.length > 0 && (
                <span className="tab-badge">{lineItems.length}</span>
              )}
            </button>
          ))}
        </div>

        {/* Line Details Table */}
        {activeLineTab === 'lines' && (
          <div className="table-card">
            <div className="table-wrapper">
              <table className="data-table">
                <thead>
                  <tr>
                    <th className="th-checkbox"><span className="checkbox-custom" /></th>
                    <th>Hold?</th>
                    <th>Line #</th>
                    <th>Line Type</th>
                    <th>Fulfillment</th>
                    <th>Item #</th>
                    <th className="th-wide">Description</th>
                    <th>Covered Item</th>
                    <th>Custom Desc.</th>
                    <th className="th-num">Qty</th>
                    <th>UOM</th>
                    <th className="th-num">On-Hand</th>
                    <th className="th-num">Available</th>
                    <th className="th-num">Unit Cost</th>
                    <th className="th-num">Margin%</th>
                    <th className="th-num">Unit Price</th>
                    <th className="th-num">Total Cost</th>
                    <th className="th-num">Total Price</th>
                    <th className="th-num">Margin Amt</th>
                    <th className="th-num">Margin%</th>
                  </tr>
                </thead>
                <tbody>
                  {lineItems.length === 0 ? (
                    <tr><td colSpan={20} className="empty-row">No data to display.</td></tr>
                  ) : lineItems.map((item, idx) => (
                    <tr key={idx} className={item.selected ? 'row-selected' : ''}>
                      <td className="td-checkbox">
                        <span className={`checkbox-custom ${item.selected ? 'checked' : ''}`}>
                          {item.selected && <Check size={12} />}
                        </span>
                      </td>
                      <td>{item.hold ? 'Yes' : '\u2014'}</td>
                      <td><span className="line-number">{item.line}</span></td>
                      <td><span className="line-type-badge">{item.lineType}</span></td>
                      <td>{item.fulfillmentStatus || '\u2014'}</td>
                      <td className="td-mono">{item.itemNumber}</td>
                      <td className="td-description">{item.description}</td>
                      <td>{item.coveredItem || '\u2014'}</td>
                      <td>{item.customDescription || '\u2014'}</td>
                      <td className="td-num">{item.qty}</td>
                      <td>{item.uom || '\u2014'}</td>
                      <td className="td-num">{item.onHand}</td>
                      <td className="td-num">{item.available}</td>
                      <td className="td-num">${item.unitCost.toFixed(2)}</td>
                      <td className="td-num">{item.marginPct}</td>
                      <td className="td-num">${item.unitPrice.toFixed(2)}</td>
                      <td className="td-num">${item.totalCost.toFixed(2)}</td>
                      <td className="td-num">${item.totalPrice.toFixed(2)}</td>
                      <td className={`td-num ${item.totalMarginAmt < 0 ? 'negative' : ''}`}>
                        ${item.totalMarginAmt.toFixed(2)}
                      </td>
                      <td className="td-num">{item.totalMarginPct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="table-footer">
              <span className="table-footer-info">
                {lineItems.length === 0 ? 'No line items' : `Showing ${lineItems.length} of ${lineItems.length} line items`}
              </span>
            </div>
          </div>
        )}

        {/* Supply Details Table */}
        {activeLineTab === 'supply' && (
          <div className="table-card">
            <div className="table-wrapper">
              <table className="data-table">
                <thead>
                  <tr>
                    <th className="th-checkbox"><span className="checkbox-custom" /></th>
                    <th>Line #</th>
                    <th>Line Type</th>
                    <th>Item #</th>
                    <th className="th-wide">Description</th>
                    <th>Warehouse</th>
                    <th>Supplier</th>
                    <th>Supplier Site</th>
                    <th>Requested Date</th>
                    <th>Schedule Ship Date</th>
                    <th>Ship To</th>
                  </tr>
                </thead>
                <tbody>
                  {lineItems.length === 0 ? (
                    <tr><td colSpan={11} className="empty-row">No data to display.</td></tr>
                  ) : lineItems.map((item, idx) => (
                    <tr key={idx}>
                      <td className="td-checkbox"><span className="checkbox-custom" /></td>
                      <td><span className="line-number">{item.line}</span></td>
                      <td><span className="line-type-badge">{item.lineType}</span></td>
                      <td className="td-mono">{item.itemNumber}</td>
                      <td className="td-description">{item.description}</td>
                      <td>{item.warehouse || '\u2014'}</td>
                      <td>{item.supplier || '\u2014'}</td>
                      <td>{item.supplierSite || '\u2014'}</td>
                      <td className="td-date">{item.requestedDate}</td>
                      <td className="td-date">{item.scheduleShipDate}</td>
                      <td>{item.shipTo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="table-footer">
              <span className="table-footer-info">
                {lineItems.length === 0 ? 'No data to display' : `Showing ${lineItems.length} of ${lineItems.length} line items`}
              </span>
            </div>
          </div>
        )}

        {/* Other tabs - empty state */}
        {(activeLineTab === 'line-attributes' || activeLineTab === 'rma') && (
          <div className="table-card">
            <div className="empty-state">
              <Package size={32} className="empty-icon" />
              <p>No data to display.</p>
            </div>
          </div>
        )}
      </div>

      {/* ── Bottom Action Bar ── */}
      <div className="bottom-bar">
        <button className="btn" disabled={isNew}>
          <RotateCcw size={15} />
          Create Return
        </button>
        <button className="btn">
          <Save size={15} />
          Save Draft
        </button>
        <button className="btn btn-primary">
          {isNew ? 'Update Quote' : 'Update Order'}
        </button>
        <button className="btn">
          Quote to Order
        </button>
      </div>

      {/* ── Products Search Modal ── */}
      <Modal open={productModalOpen} onClose={() => setProductModalOpen(false)} title="Products Search">
        <div className="product-search-bar">
          <div className="product-search-input-wrap">
            <Search size={16} className="product-search-icon" />
            <input
              className="form-input product-search-input"
              placeholder="Search Product Name or Part Number or Model"
              value={productSearch}
              onChange={e => setProductSearch(e.target.value)}
            />
          </div>
          <button className="btn btn-primary">
            <Search size={15} />
            Search
          </button>
        </div>
        <div className="table-card" style={{ marginTop: 16, border: 'none', boxShadow: 'none' }}>
          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Part #</th>
                  <th>Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={3} className="empty-row">No data to display.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn" onClick={() => setProductModalOpen(false)}>Cancel</button>
          <button className="btn"><RefreshCw size={15} /> Refresh</button>
          <button className="btn btn-primary">Show Selected Items</button>
        </div>
      </Modal>
    </div>
  )
}

/* ──────────────────── App Router ──────────────────── */

function App() {
  // page: 'search' | 'order' | 'create'
  const [page, setPage] = useState('search')

  if (page === 'search') {
    return (
      <SearchPage
        onOpenOrder={() => setPage('order')}
        onCreateNew={() => setPage('create')}
      />
    )
  }

  return (
    <OrderDetailPage
      isNew={page === 'create'}
      onBack={() => setPage('search')}
    />
  )
}

export default App
