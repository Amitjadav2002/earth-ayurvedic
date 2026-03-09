import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Package } from 'lucide-react';
import productImage from '@/assets/product-image.png';
import productImage2 from '@/assets/3item.png';
import { toast } from 'sonner';
import axios from 'axios'

const OrderPage = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: '', phone: '', address: '', city: '', state: '', pincode: '', package: 'pkg1',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    // const pkg = form.package === 'pkg1' ? 'Pills + Syrup (₹1000)' : 'Pills + Syrup + Powder (₹1300)';
    // const msg = `Hello! I need information about the medicine.`;
    // const encoded = encodeURIComponent(msg);
    // window.open(`https://wa.me/918460169603?text=${encoded}`, '_blank');

    axios.post("https://hook.eu2.make.com/92phfvloqy5h4l2ybfjrccbcst3kxj9n", {
      name: form.name, phone: form.phone, address: form.address, pincode: form.pincode, quantity: form.package
    }).then(() => {
    setForm({ name: "", phone: "", address: "", city: "", state: "", pincode: "", package: "pkg1" });
    })

    toast.success('Ordered Succesfully!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(()=>{
    window.scroll(0,0)
  },[])
  return (
    <section className="min-h-screen pt-20 pb-10 gradient-hero">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Product info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className=""
          >
            <div className="space-y-3 mt-5">
              <div className="flex items-center gap-3 bg-background rounded-xl p-4 shadow-card">
                <img src={productImage} alt='' className='h-16 rounded-lg' />
                <div>
                  <p className="font-bold text-foreground">{t('order.pkg1')}</p>
                  <p className="text-xs text-muted-foreground">2 medicines combo</p>
                  <p className="text-xs text-muted-foreground">1 Month Course</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-background rounded-xl p-4 shadow-card">
                <img src={productImage2} alt='' className='h-16 rounded-lg' />
                <div>
                  <p className="font-bold text-foreground">{t('order.pkg2')}</p>
                  <p className="text-xs text-muted-foreground">Complete 3 medicines combo</p>
                  <p className="text-xs text-muted-foreground">{t('m2')}</p>
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Truck className="w-4 h-4 text-primary" /> {t('order.free')}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ShieldCheck className="w-4 h-4 text-primary" /> {t('order.cod')}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Order form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="bg-background rounded-2xl p-6 sm:p-8 shadow-earth"
          >
            <h1 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-6">{t('order.title')}</h1>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">{t('order.name')}</label>
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  maxLength={100}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">{t('order.phone')}</label>
                <input
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  pattern="[0-9]{10}"
                  maxLength={10}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">{t('order.address')}</label>
                <textarea
                  name="address"
                  required
                  value={form.address}
                  onChange={handleChange}
                  rows={2}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  maxLength={300}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">{t('order.city')}</label>
                  <input
                    name="city"
                    required
                    value={form.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    maxLength={50}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">{t('order.state')}</label>
                  <input
                    name="state"
                    required
                    value={form.state}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    maxLength={50}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">{t('order.pincode')}</label>
                <input
                  name="pincode"
                  required
                  value={form.pincode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  pattern="[0-9]{6}"
                  maxLength={6}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">{t('order.package')}</label>
                <select
                  name="package"
                  value={form.package}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                >
                  <option value="pkg1">{t('order.pkg1')}</option>
                  <option value="pkg2">{t('order.pkg2')}</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full gradient-cta text-primary-foreground py-4 rounded-xl text-lg font-bold mt-6 hover:opacity-90 transition-opacity shadow-earth"
            >
              {t('order.submit')} →
            </button>

            <div className="flex justify-center gap-6 mt-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Truck className="w-3 h-3" /> {t('order.free')}</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> {t('order.cod')}</span>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default OrderPage;
